module Route exposing (Route(..), link, matchers, routeToPath, toLink, urlToRoute, toPath)

{-|

@docs Route, link, matchers, routeToPath, toLink, urlToRoute, toPath

-}


import Html exposing (Attribute, Html)
import Html.Attributes as Attr
import Path exposing (Path)
import Pages.Internal.Router


{-| -}
type Route
    = Blog__Slug_ { slug : String }
    | Projects__Slug_ { slug : String }
    | Blog
    | Projects
    | Index


{-| -}
urlToRoute : { url | path : String } -> Maybe Route
urlToRoute url =
    url.path
    |> withoutBaseUrl 
    |> Pages.Internal.Router.firstMatch matchers


baseUrl : String
baseUrl =
    "/"


baseUrlAsPath : List String
baseUrlAsPath =
    baseUrl
    |> String.split "/"
    |> List.filter (not << String.isEmpty)


withoutBaseUrl path =
    if (path |> String.startsWith baseUrl) then
      String.dropLeft (String.length baseUrl) path
    else
      path

{-| -}
matchers : List (Pages.Internal.Router.Matcher Route)
matchers =
    [ { pattern = "^\\/blog\\/(?:([^/]+))$"
      , toRoute = \matches ->
      case matches of
          [ Just slug ] ->
              Just ( Blog__Slug_ { slug = slug } )
          _ ->
              Nothing

  
     }
    , { pattern = "^\\/projects\\/(?:([^/]+))$"
      , toRoute = \matches ->
      case matches of
          [ Just slug ] ->
              Just ( Projects__Slug_ { slug = slug } )
          _ ->
              Nothing

  
     }
    , { pattern = "^\\/blog$"
      , toRoute = \matches ->
      case matches of
          [  ] ->
              Just Blog
          _ ->
              Nothing

  
     }
    , { pattern = "^\\/projects$"
      , toRoute = \matches ->
      case matches of
          [  ] ->
              Just Projects
          _ ->
              Nothing

  
     }
    , { pattern = "^\\/$"
      , toRoute = \matches ->
      case matches of
          [  ] ->
              Just Index
          _ ->
              Nothing

  
     }

    ]


{-| -}
routeToPath : Route -> List String
routeToPath route =
    case route of
        Blog__Slug_ params ->
           List.concat [ [ "blog" ],[ params.slug ] ]
        Projects__Slug_ params ->
           List.concat [ [ "projects" ],[ params.slug ] ]
        Blog ->
           List.concat [ [ "blog" ] ]
        Projects ->
           List.concat [ [ "projects" ] ]
        Index ->
           List.concat [  ]

{-| -}
toPath : Route -> Path
toPath route =
    (baseUrlAsPath ++ (route |> routeToPath)) |> String.join "/" |> Path.fromString


{-| -}
toString : Route -> String
toString route =
    route |> toPath |> Path.toAbsolute


{-| -}
toLink : (List (Attribute msg) -> tag) -> Route -> tag
toLink toAnchorTag route =
    toAnchorTag
        [ route |> toString |> Attr.href
        , Attr.attribute "elm-pages:prefetch" ""
        ]


{-| -}
link : Route -> List (Attribute msg) -> List (Html msg) -> Html msg
link route attributes children =
    toLink
        (\anchorAttrs ->
            Html.a
                (anchorAttrs ++ attributes)
                children
        )
        route
