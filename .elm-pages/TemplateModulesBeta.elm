port module TemplateModulesBeta exposing (..)

import Api
import ApiRoute
import Browser.Navigation
import Route exposing (Route)
import View
import Json.Decode
import Json.Encode
import Pages.Flags
import Pages.Internal.Platform
import Pages.Manifest as Manifest
import Shared
import Site
import Head
import Html exposing (Html)
import Pages.Internal.NotFoundReason
import Pages.PageUrl exposing (PageUrl)
import Path exposing (Path)
import Pages.Internal.RoutePattern
import Url
import DataSource exposing (DataSource)
import QueryParams

import Page.Blog
import Page.Index
import Page.Projects
import Page.Blog.Slug_
import Page.Projects.Slug_


type alias Model =
    { global : Shared.Model
    , page : PageModel
    , current :
        Maybe
            { path :
                { path : Path
                , query : Maybe String
                , fragment : Maybe String
                }
            , metadata : Maybe Route
            , pageUrl : Maybe PageUrl
            }
    }


type PageModel
    = ModelBlog Page.Blog.Model
    | ModelIndex Page.Index.Model
    | ModelProjects Page.Projects.Model
    | ModelBlog__Slug_ Page.Blog.Slug_.Model
    | ModelProjects__Slug_ Page.Projects.Slug_.Model

    | NotFound




type Msg
    = MsgGlobal Shared.Msg
    | OnPageChange
        { protocol : Url.Protocol
        , host : String
        , port_ : Maybe Int
        , path : Path
        , query : Maybe String
        , fragment : Maybe String
        , metadata : Maybe Route
        }
    | MsgBlog Page.Blog.Msg
    | MsgIndex Page.Index.Msg
    | MsgProjects Page.Projects.Msg
    | MsgBlog__Slug_ Page.Blog.Slug_.Msg
    | MsgProjects__Slug_ Page.Projects.Slug_.Msg



type PageData
    = Data404NotFoundPage____
    | DataBlog Page.Blog.Data
    | DataIndex Page.Index.Data
    | DataProjects Page.Projects.Data
    | DataBlog__Slug_ Page.Blog.Slug_.Data
    | DataProjects__Slug_ Page.Projects.Slug_.Data




view :
    { path : Path
    , route : Maybe Route
    }
    -> Maybe PageUrl
    -> Shared.Data
    -> PageData
    ->
        { view : Model -> { title : String, body : Html Msg }
        , head : List Head.Tag
        }
view page maybePageUrl globalData pageData =
    case ( page.route, pageData ) of
        ( Just Route.Blog, DataBlog data ) ->
                  { view =
                      \model ->
                          case model.page of
                              ModelBlog subModel ->
                                  Page.Blog.page.view
                                      maybePageUrl
                                      model.global
                                      subModel
                                      { data = data
                                      , sharedData = globalData
                                      , routeParams = {}
                                      , path = page.path
                                      }
                                      |> View.map MsgBlog
                                      |> Shared.template.view globalData page model.global MsgGlobal

                              _ ->
                                  { title = "Model mismatch", body = Html.text <| "Model mismatch" }
                  , head = []
                  }


        ( Just Route.Index, DataIndex data ) ->
                  { view =
                      \model ->
                          case model.page of
                              ModelIndex subModel ->
                                  Page.Index.page.view
                                      maybePageUrl
                                      model.global
                                      subModel
                                      { data = data
                                      , sharedData = globalData
                                      , routeParams = {}
                                      , path = page.path
                                      }
                                      |> View.map MsgIndex
                                      |> Shared.template.view globalData page model.global MsgGlobal

                              _ ->
                                  { title = "Model mismatch", body = Html.text <| "Model mismatch" }
                  , head = []
                  }


        ( Just Route.Projects, DataProjects data ) ->
                  { view =
                      \model ->
                          case model.page of
                              ModelProjects subModel ->
                                  Page.Projects.page.view
                                      maybePageUrl
                                      model.global
                                      subModel
                                      { data = data
                                      , sharedData = globalData
                                      , routeParams = {}
                                      , path = page.path
                                      }
                                      |> View.map MsgProjects
                                      |> Shared.template.view globalData page model.global MsgGlobal

                              _ ->
                                  { title = "Model mismatch", body = Html.text <| "Model mismatch" }
                  , head = []
                  }


        ( Just (Route.Blog__Slug_ s), DataBlog__Slug_ data ) ->
                  { view =
                      \model ->
                          case model.page of
                              ModelBlog__Slug_ subModel ->
                                  Page.Blog.Slug_.page.view
                                      maybePageUrl
                                      model.global
                                      subModel
                                      { data = data
                                      , sharedData = globalData
                                      , routeParams = s
                                      , path = page.path
                                      }
                                      |> View.map MsgBlog__Slug_
                                      |> Shared.template.view globalData page model.global MsgGlobal

                              _ ->
                                  { title = "Model mismatch", body = Html.text <| "Model mismatch" }
                  , head = []
                  }


        ( Just (Route.Projects__Slug_ s), DataProjects__Slug_ data ) ->
                  { view =
                      \model ->
                          case model.page of
                              ModelProjects__Slug_ subModel ->
                                  Page.Projects.Slug_.page.view
                                      maybePageUrl
                                      model.global
                                      subModel
                                      { data = data
                                      , sharedData = globalData
                                      , routeParams = s
                                      , path = page.path
                                      }
                                      |> View.map MsgProjects__Slug_
                                      |> Shared.template.view globalData page model.global MsgGlobal

                              _ ->
                                  { title = "Model mismatch", body = Html.text <| "Model mismatch" }
                  , head = []
                  }

        _ ->
            { head = []
            , view =
                \_ ->
                    { title = "Page not found"
                    , body =
                            Html.div [] 
                            [ Html.text "This page could not be found."
                            ]
                    }

            }



init :
    Maybe Shared.Model
    -> Pages.Flags.Flags
    -> Shared.Data
    -> PageData
    -> Maybe Browser.Navigation.Key
    ->
        Maybe
            { path :
                { path : Path
                , query : Maybe String
                , fragment : Maybe String
                }
            , metadata : Maybe Route
            , pageUrl : Maybe PageUrl
            }
    -> ( Model, Cmd Msg )
init currentGlobalModel userFlags sharedData pageData navigationKey maybePagePath =
    let
        ( sharedModel, globalCmd ) =
            currentGlobalModel |> Maybe.map (\m -> ( m, Cmd.none )) |> Maybe.withDefault (Shared.template.init navigationKey userFlags maybePagePath)

        ( templateModel, templateCmd ) =
            case ( ( Maybe.map2 Tuple.pair (maybePagePath |> Maybe.andThen .metadata) (maybePagePath |> Maybe.map .path) ), pageData ) of
                ( Just ( Route.Blog, justPath ), DataBlog thisPageData ) ->
                    Page.Blog.page.init
                        (Maybe.andThen .pageUrl maybePagePath)
                        sharedModel
                        { data = thisPageData
                        , sharedData = sharedData
                        , routeParams = {}
                        , path = justPath.path
                        }
                        |> Tuple.mapBoth ModelBlog (Cmd.map MsgBlog)

                ( Just ( Route.Index, justPath ), DataIndex thisPageData ) ->
                    Page.Index.page.init
                        (Maybe.andThen .pageUrl maybePagePath)
                        sharedModel
                        { data = thisPageData
                        , sharedData = sharedData
                        , routeParams = {}
                        , path = justPath.path
                        }
                        |> Tuple.mapBoth ModelIndex (Cmd.map MsgIndex)

                ( Just ( Route.Projects, justPath ), DataProjects thisPageData ) ->
                    Page.Projects.page.init
                        (Maybe.andThen .pageUrl maybePagePath)
                        sharedModel
                        { data = thisPageData
                        , sharedData = sharedData
                        , routeParams = {}
                        , path = justPath.path
                        }
                        |> Tuple.mapBoth ModelProjects (Cmd.map MsgProjects)

                ( Just ( (Route.Blog__Slug_ routeParams), justPath ), DataBlog__Slug_ thisPageData ) ->
                    Page.Blog.Slug_.page.init
                        (Maybe.andThen .pageUrl maybePagePath)
                        sharedModel
                        { data = thisPageData
                        , sharedData = sharedData
                        , routeParams = routeParams
                        , path = justPath.path
                        }
                        |> Tuple.mapBoth ModelBlog__Slug_ (Cmd.map MsgBlog__Slug_)

                ( Just ( (Route.Projects__Slug_ routeParams), justPath ), DataProjects__Slug_ thisPageData ) ->
                    Page.Projects.Slug_.page.init
                        (Maybe.andThen .pageUrl maybePagePath)
                        sharedModel
                        { data = thisPageData
                        , sharedData = sharedData
                        , routeParams = routeParams
                        , path = justPath.path
                        }
                        |> Tuple.mapBoth ModelProjects__Slug_ (Cmd.map MsgProjects__Slug_)

                _ ->
                    ( NotFound, Cmd.none )
    in
    ( { global = sharedModel
      , page = templateModel
      , current = maybePagePath
      }
    , Cmd.batch
        [ templateCmd
        , globalCmd |> Cmd.map MsgGlobal
        ]
    )



update : Shared.Data -> PageData -> Maybe Browser.Navigation.Key -> Msg -> Model -> ( Model, Cmd Msg )
update sharedData pageData navigationKey msg model =
    case msg of
        MsgGlobal msg_ ->
            let
                ( sharedModel, globalCmd ) =
                    Shared.template.update msg_ model.global
            in
            ( { model | global = sharedModel }
            , globalCmd |> Cmd.map MsgGlobal
            )

        OnPageChange record ->
            (init (Just model.global) Pages.Flags.PreRenderFlags sharedData pageData navigationKey <|
                Just
                    { path =
                        { path = record.path
                        , query = record.query
                        , fragment = record.fragment
                        }
                    , metadata = record.metadata
                    , pageUrl =
                        Just
                            { protocol = record.protocol
                            , host = record.host
                            , port_ = record.port_
                            , path = record.path
                            , query = record.query |> Maybe.map QueryParams.fromString
                            , fragment = record.fragment
                            }
                    }
            )
                |> (\( updatedModel, cmd ) ->
                        case Shared.template.onPageChange of
                            Nothing ->
                                ( updatedModel, cmd )

                            Just thingy ->
                                let
                                    ( updatedGlobalModel, globalCmd ) =
                                        Shared.template.update
                                            (thingy
                                                { path = record.path
                                                , query = record.query
                                                , fragment = record.fragment
                                                }
                                            )
                                            model.global
                                in
                                ( { updatedModel
                                    | global = updatedGlobalModel
                                  }
                                , Cmd.batch [ cmd, Cmd.map MsgGlobal globalCmd ]
                                )
                   )


        
        MsgBlog msg_ ->
            let
                ( updatedPageModel, pageCmd, ( newGlobalModel, newGlobalCmd ) ) =
                    case ( model.page, pageData, Maybe.map3 (\a b c -> ( a, b, c )) (model.current |> Maybe.andThen .metadata) (model.current |> Maybe.andThen .pageUrl) (model.current |> Maybe.map .path) ) of
                        ( ModelBlog pageModel, DataBlog thisPageData, Just ( Route.Blog, pageUrl, justPage ) ) ->
                            Page.Blog.page.update
                                pageUrl
                                { data = thisPageData
                                , sharedData = sharedData
                                , routeParams = {}
                                , path = justPage.path
                                }
                                navigationKey
                                msg_
                                pageModel
                                model.global
                                |> mapBoth ModelBlog (Cmd.map MsgBlog)
                                |> (\( a, b, c ) ->
                                        case c of
                                            Just sharedMsg ->
                                                ( a, b, Shared.template.update sharedMsg model.global )

                                            Nothing ->
                                                ( a, b, ( model.global, Cmd.none ) )
                                   )

                        _ ->
                            ( model.page, Cmd.none, ( model.global, Cmd.none ) )
            in
            ( { model | page = updatedPageModel, global = newGlobalModel }
            , Cmd.batch [ pageCmd, newGlobalCmd |> Cmd.map MsgGlobal ]
            )

        
        MsgIndex msg_ ->
            let
                ( updatedPageModel, pageCmd, ( newGlobalModel, newGlobalCmd ) ) =
                    case ( model.page, pageData, Maybe.map3 (\a b c -> ( a, b, c )) (model.current |> Maybe.andThen .metadata) (model.current |> Maybe.andThen .pageUrl) (model.current |> Maybe.map .path) ) of
                        ( ModelIndex pageModel, DataIndex thisPageData, Just ( Route.Index, pageUrl, justPage ) ) ->
                            Page.Index.page.update
                                pageUrl
                                { data = thisPageData
                                , sharedData = sharedData
                                , routeParams = {}
                                , path = justPage.path
                                }
                                navigationKey
                                msg_
                                pageModel
                                model.global
                                |> mapBoth ModelIndex (Cmd.map MsgIndex)
                                |> (\( a, b, c ) ->
                                        case c of
                                            Just sharedMsg ->
                                                ( a, b, Shared.template.update sharedMsg model.global )

                                            Nothing ->
                                                ( a, b, ( model.global, Cmd.none ) )
                                   )

                        _ ->
                            ( model.page, Cmd.none, ( model.global, Cmd.none ) )
            in
            ( { model | page = updatedPageModel, global = newGlobalModel }
            , Cmd.batch [ pageCmd, newGlobalCmd |> Cmd.map MsgGlobal ]
            )

        
        MsgProjects msg_ ->
            let
                ( updatedPageModel, pageCmd, ( newGlobalModel, newGlobalCmd ) ) =
                    case ( model.page, pageData, Maybe.map3 (\a b c -> ( a, b, c )) (model.current |> Maybe.andThen .metadata) (model.current |> Maybe.andThen .pageUrl) (model.current |> Maybe.map .path) ) of
                        ( ModelProjects pageModel, DataProjects thisPageData, Just ( Route.Projects, pageUrl, justPage ) ) ->
                            Page.Projects.page.update
                                pageUrl
                                { data = thisPageData
                                , sharedData = sharedData
                                , routeParams = {}
                                , path = justPage.path
                                }
                                navigationKey
                                msg_
                                pageModel
                                model.global
                                |> mapBoth ModelProjects (Cmd.map MsgProjects)
                                |> (\( a, b, c ) ->
                                        case c of
                                            Just sharedMsg ->
                                                ( a, b, Shared.template.update sharedMsg model.global )

                                            Nothing ->
                                                ( a, b, ( model.global, Cmd.none ) )
                                   )

                        _ ->
                            ( model.page, Cmd.none, ( model.global, Cmd.none ) )
            in
            ( { model | page = updatedPageModel, global = newGlobalModel }
            , Cmd.batch [ pageCmd, newGlobalCmd |> Cmd.map MsgGlobal ]
            )

        
        MsgBlog__Slug_ msg_ ->
            let
                ( updatedPageModel, pageCmd, ( newGlobalModel, newGlobalCmd ) ) =
                    case ( model.page, pageData, Maybe.map3 (\a b c -> ( a, b, c )) (model.current |> Maybe.andThen .metadata) (model.current |> Maybe.andThen .pageUrl) (model.current |> Maybe.map .path) ) of
                        ( ModelBlog__Slug_ pageModel, DataBlog__Slug_ thisPageData, Just ( (Route.Blog__Slug_ routeParams), pageUrl, justPage ) ) ->
                            Page.Blog.Slug_.page.update
                                pageUrl
                                { data = thisPageData
                                , sharedData = sharedData
                                , routeParams = routeParams
                                , path = justPage.path
                                }
                                navigationKey
                                msg_
                                pageModel
                                model.global
                                |> mapBoth ModelBlog__Slug_ (Cmd.map MsgBlog__Slug_)
                                |> (\( a, b, c ) ->
                                        case c of
                                            Just sharedMsg ->
                                                ( a, b, Shared.template.update sharedMsg model.global )

                                            Nothing ->
                                                ( a, b, ( model.global, Cmd.none ) )
                                   )

                        _ ->
                            ( model.page, Cmd.none, ( model.global, Cmd.none ) )
            in
            ( { model | page = updatedPageModel, global = newGlobalModel }
            , Cmd.batch [ pageCmd, newGlobalCmd |> Cmd.map MsgGlobal ]
            )

        
        MsgProjects__Slug_ msg_ ->
            let
                ( updatedPageModel, pageCmd, ( newGlobalModel, newGlobalCmd ) ) =
                    case ( model.page, pageData, Maybe.map3 (\a b c -> ( a, b, c )) (model.current |> Maybe.andThen .metadata) (model.current |> Maybe.andThen .pageUrl) (model.current |> Maybe.map .path) ) of
                        ( ModelProjects__Slug_ pageModel, DataProjects__Slug_ thisPageData, Just ( (Route.Projects__Slug_ routeParams), pageUrl, justPage ) ) ->
                            Page.Projects.Slug_.page.update
                                pageUrl
                                { data = thisPageData
                                , sharedData = sharedData
                                , routeParams = routeParams
                                , path = justPage.path
                                }
                                navigationKey
                                msg_
                                pageModel
                                model.global
                                |> mapBoth ModelProjects__Slug_ (Cmd.map MsgProjects__Slug_)
                                |> (\( a, b, c ) ->
                                        case c of
                                            Just sharedMsg ->
                                                ( a, b, Shared.template.update sharedMsg model.global )

                                            Nothing ->
                                                ( a, b, ( model.global, Cmd.none ) )
                                   )

                        _ ->
                            ( model.page, Cmd.none, ( model.global, Cmd.none ) )
            in
            ( { model | page = updatedPageModel, global = newGlobalModel }
            , Cmd.batch [ pageCmd, newGlobalCmd |> Cmd.map MsgGlobal ]
            )



type alias SiteConfig =
    { canonicalUrl : String
    , manifest : Manifest.Config
    }

templateSubscriptions : Maybe Route -> Path -> Model -> Sub Msg
templateSubscriptions route path model =
    case ( model.page, route ) of
        
        ( ModelBlog templateModel, Just Route.Blog ) ->
            Page.Blog.page.subscriptions
                Nothing -- TODO wire through value
                {}
                path
                templateModel
                model.global
                |> Sub.map MsgBlog

        
        ( ModelIndex templateModel, Just Route.Index ) ->
            Page.Index.page.subscriptions
                Nothing -- TODO wire through value
                {}
                path
                templateModel
                model.global
                |> Sub.map MsgIndex

        
        ( ModelProjects templateModel, Just Route.Projects ) ->
            Page.Projects.page.subscriptions
                Nothing -- TODO wire through value
                {}
                path
                templateModel
                model.global
                |> Sub.map MsgProjects

        
        ( ModelBlog__Slug_ templateModel, Just (Route.Blog__Slug_ routeParams) ) ->
            Page.Blog.Slug_.page.subscriptions
                Nothing -- TODO wire through value
                routeParams
                path
                templateModel
                model.global
                |> Sub.map MsgBlog__Slug_

        
        ( ModelProjects__Slug_ templateModel, Just (Route.Projects__Slug_ routeParams) ) ->
            Page.Projects.Slug_.page.subscriptions
                Nothing -- TODO wire through value
                routeParams
                path
                templateModel
                model.global
                |> Sub.map MsgProjects__Slug_



        _ ->
            Sub.none


main : Pages.Internal.Platform.Program Model Msg PageData Shared.Data
main =
    Pages.Internal.Platform.application
        { init = init Nothing
        , urlToRoute = Route.urlToRoute
        , routeToPath = \route -> route |> Maybe.map Route.routeToPath |> Maybe.withDefault []
        , site = Nothing
        , getStaticRoutes = DataSource.succeed []
        , handleRoute = handleRoute
        , view = view
        , update = update
        , subscriptions =
            \route path model ->
                Sub.batch
                    [ Shared.template.subscriptions path model.global |> Sub.map MsgGlobal
                    , templateSubscriptions route path model
                    ]
        , onPageChange = OnPageChange
        , toJsPort = toJsPort
        , fromJsPort = fromJsPort identity
        , data = dataForRoute
        , sharedData = Shared.template.data
        , apiRoutes = \_ -> []
        , pathPatterns = routePatterns3
        , basePath = [  ]
        }

dataForRoute : Maybe Route -> DataSource PageData
dataForRoute route =
    case route of
        Nothing ->
            DataSource.succeed Data404NotFoundPage____
        Just Route.Blog ->
            Page.Blog.page.data {} |> DataSource.map DataBlog
        Just Route.Index ->
            Page.Index.page.data {} |> DataSource.map DataIndex
        Just Route.Projects ->
            Page.Projects.page.data {} |> DataSource.map DataProjects
        Just (Route.Blog__Slug_ routeParams) ->
            Page.Blog.Slug_.page.data routeParams |> DataSource.map DataBlog__Slug_
        Just (Route.Projects__Slug_ routeParams) ->
            Page.Projects.Slug_.page.data routeParams |> DataSource.map DataProjects__Slug_

handleRoute : Maybe Route -> DataSource (Maybe Pages.Internal.NotFoundReason.NotFoundReason)
handleRoute maybeRoute =
    case maybeRoute of
        Nothing ->
            DataSource.succeed Nothing

        Just (Route.Blog) ->
            Page.Blog.page.handleRoute { moduleName = [ "Blog" ], routePattern = { segments = [ Pages.Internal.RoutePattern.StaticSegment "blog" ], ending = Nothing } } (\param -> [  ]) {}
        Just (Route.Index) ->
            Page.Index.page.handleRoute { moduleName = [ "Index" ], routePattern = { segments = [  ], ending = Nothing } } (\param -> [  ]) {}
        Just (Route.Projects) ->
            Page.Projects.page.handleRoute { moduleName = [ "Projects" ], routePattern = { segments = [ Pages.Internal.RoutePattern.StaticSegment "projects" ], ending = Nothing } } (\param -> [  ]) {}
        Just (Route.Blog__Slug_ routeParams) ->
            Page.Blog.Slug_.page.handleRoute { moduleName = [ "Blog", "Slug_" ], routePattern = { segments = [ Pages.Internal.RoutePattern.StaticSegment "blog", Pages.Internal.RoutePattern.DynamicSegment "slug" ], ending = Nothing } } (\param -> [ ( "slug", stringToString param.slug ) ]) routeParams
        Just (Route.Projects__Slug_ routeParams) ->
            Page.Projects.Slug_.page.handleRoute { moduleName = [ "Projects", "Slug_" ], routePattern = { segments = [ Pages.Internal.RoutePattern.StaticSegment "projects", Pages.Internal.RoutePattern.DynamicSegment "slug" ], ending = Nothing } } (\param -> [ ( "slug", stringToString param.slug ) ]) routeParams


stringToString : String -> String
stringToString string =
    "\"" ++ string ++ "\""


nonEmptyToString : ( String, List String ) -> String
nonEmptyToString ( first, rest ) =
    "( "
        ++ stringToString first
        ++ ", [ "
        ++ (rest
                |> List.map stringToString
                |> String.join ", "
           )
        ++ " ] )"


listToString : List String -> String
listToString strings =
    "[ "
        ++ (strings
                |> List.map stringToString
                |> String.join ", "
           )
        ++ " ]"


maybeToString : Maybe String -> String
maybeToString maybeString =
    case maybeString of
        Just string ->
            "Just " ++ stringToString string

        Nothing ->
            "Nothing"




routePatterns : ApiRoute.ApiRoute ApiRoute.Response
routePatterns =
    ApiRoute.succeed
        (Json.Encode.list
            (\{ kind, pathPattern } ->
                Json.Encode.object
                    [ ( "kind", Json.Encode.string kind )
                    , ( "pathPattern", Json.Encode.string pathPattern )
                    ]
            )
            [ { kind = Page.Blog.Slug_.page.kind, pathPattern = "/blog/:slug" }
            , { kind = Page.Projects.Slug_.page.kind, pathPattern = "/projects/:slug" }
            , { kind = Page.Blog.page.kind, pathPattern = "/blog" }
            , { kind = Page.Projects.page.kind, pathPattern = "/projects" }
            , { kind = Page.Index.page.kind, pathPattern = "/" }
          
            ]
            |> (\json -> DataSource.succeed { body = Json.Encode.encode 0 json })
        )
        |> ApiRoute.literal "route-patterns.json"
        |> ApiRoute.single


routePatterns2 : List String
routePatterns2 =
    [ "/blog/:slug"
    , "/projects/:slug"
    , "/blog"
    , "/projects"
    , "/"
    ]


routePatterns3 : List Pages.Internal.RoutePattern.RoutePattern
routePatterns3 =
    [ { segments = [ Pages.Internal.RoutePattern.StaticSegment "blog", Pages.Internal.RoutePattern.DynamicSegment "slug" ], ending = Nothing }
    , { segments = [ Pages.Internal.RoutePattern.StaticSegment "projects", Pages.Internal.RoutePattern.DynamicSegment "slug" ], ending = Nothing }
    , { segments = [ Pages.Internal.RoutePattern.StaticSegment "blog" ], ending = Nothing }
    , { segments = [ Pages.Internal.RoutePattern.StaticSegment "projects" ], ending = Nothing }
    , { segments = [  ], ending = Nothing }
    ]

getStaticRoutes : DataSource (List Route)
getStaticRoutes =
    DataSource.combine
        [ Page.Blog.Slug_.page.staticRoutes |> DataSource.map (List.map Route.Blog__Slug_)
        , Page.Projects.Slug_.page.staticRoutes |> DataSource.map (List.map Route.Projects__Slug_)
        , Page.Blog.page.staticRoutes |> DataSource.map (List.map (\_ -> Route.Blog))
        , Page.Projects.page.staticRoutes |> DataSource.map (List.map (\_ -> Route.Projects))
        , Page.Index.page.staticRoutes |> DataSource.map (List.map (\_ -> Route.Index))
        ]
        |> DataSource.map List.concat


pathsToGenerateHandler : ApiRoute.ApiRoute ApiRoute.Response
pathsToGenerateHandler =
    ApiRoute.succeed
        (DataSource.map2
            (\pageRoutes apiRoutes ->
                { body =
                    (pageRoutes ++ (apiRoutes |> List.map (\api -> "/" ++ api)))
                        |> Json.Encode.list Json.Encode.string
                        |> Json.Encode.encode 0
                }
            )
            (DataSource.map
                (List.map
                    (\route ->
                        route
                            |> Route.toPath
                            |> Path.toAbsolute
                    )
                )
                getStaticRoutes
            )
            ((manifestHandler :: Api.routes getStaticRoutes (\_ -> ""))
                |> List.map ApiRoute.getBuildTimeRoutes
                |> DataSource.combine
                |> DataSource.map List.concat
            )
        )
        |> ApiRoute.literal "all-paths.json"
        |> ApiRoute.single


manifestHandler : ApiRoute.ApiRoute ApiRoute.Response
manifestHandler =
    ApiRoute.succeed
        (Site.config
            |> .data
            |> DataSource.map
                (\data ->
                    Site.config.manifest data
                        |> manifestToFile (Site.config.canonicalUrl)
                )
        )
        |> ApiRoute.literal "manifest.json"
        |> ApiRoute.single


manifestToFile : String -> Manifest.Config -> { body : String }
manifestToFile resolvedCanonicalUrl manifestConfig =
    manifestConfig
        |> Manifest.toJson resolvedCanonicalUrl
        |> (\manifestJsonValue ->
                { body = Json.Encode.encode 0 manifestJsonValue
                }
           )


port toJsPort : Json.Encode.Value -> Cmd msg

port fromJsPort : (Json.Decode.Value -> msg) -> Sub msg


mapBoth : (a -> b) -> (c -> d) -> ( a, c, e ) -> ( b, d, e )
mapBoth fnA fnB ( a, b, c ) =
    ( fnA a, fnB b, c )
