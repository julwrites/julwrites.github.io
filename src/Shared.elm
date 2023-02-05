module Shared exposing (Data, Model, Msg(..), SharedMsg(..), template)

import Browser.Dom
import Browser.Events as Events
import Browser.Navigation
import DataSource
import Element
import Element.Background as Background
import Element.Font as Font
import Element.Region as Region
import Html exposing (Html)
import Pages.Flags
import Pages.PageUrl exposing (PageUrl)
import Path exposing (Path)
import Route exposing (Route)
import SharedTemplate exposing (SharedTemplate)
import Task
import Theme
import Url
import View exposing (View, iconLink)


template : SharedTemplate Msg Model Data msg
template =
    { init = init
    , update = update
    , view = view
    , data = data
    , subscriptions = subscriptions
    , onPageChange = Just OnPageChange
    }


type Msg
    = OnPageChange
        { path : Path
        , query : Maybe String
        , fragment : Maybe String
        }
    | SharedMsg SharedMsg
    | OnWindowResize Int Int
    | Viewport Browser.Dom.Viewport


type alias Data =
    ()


type SharedMsg
    = NoOp


type alias Model =
    { window : { width : Int, height : Int }
    , path : Path
    }


init :
    Maybe Browser.Navigation.Key
    -> Pages.Flags.Flags
    ->
        Maybe
            { path :
                { path : Path
                , query : Maybe String
                , fragment : Maybe String
                }
            , metadata : route
            , pageUrl : Maybe PageUrl
            }
    -> ( Model, Cmd Msg )
init navigationKey flags maybePagePath =
    ( { window = { width = 0, height = 0 }, path = Path.join [ "/" ] }
    , Task.perform Viewport Browser.Dom.getViewport
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnPageChange pageChange ->
            ( { model | path = pageChange.path }, Cmd.none )

        SharedMsg globalMsg ->
            ( model, Cmd.none )

        OnWindowResize w h ->
            ( { model | window = { width = w, height = h } }, Cmd.none )

        Viewport viewport ->
            ( { model | window = { width = round viewport.viewport.width, height = round viewport.viewport.height } }, Cmd.none )


subscriptions : Path -> Model -> Sub Msg
subscriptions _ _ =
    Events.onResize (\w h -> OnWindowResize w h)


data : DataSource.DataSource Data
data =
    DataSource.succeed ()


view :
    Data
    ->
        { path : Path
        , route : Maybe Route
        }
    -> Model
    -> (Msg -> msg)
    -> View msg
    -> { body : Html msg, title : String }
view sharedData page model toMsg pageView =
    { title = pageView.title
    , body = templateView model pageView
    }


templateView : Model -> View msg -> Html msg
templateView model pageView =
    Element.layout
        [ Background.color Theme.siteTheme.backgroundColor
        , Font.color Theme.siteTheme.fontColor
        , Font.family Theme.siteTheme.fontFamily
        , Element.padding Theme.siteTheme.padding
        , Element.width (Element.fill |> Element.maximum model.window.width)
        ]
        (Element.column
            [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
            [ menu model
            , pageView.body
            , footer
            ]
        )


menu : Model -> Element.Element msg
menu model =
    Element.row
        [ Font.size 20, Region.navigation, Element.centerX, Element.spacing Theme.siteTheme.menuSpacing ]
        (filteredMenu (Path.toAbsolute model.path))


filteredMenu : String -> List (Element.Element msg)
filteredMenu path =
    [ menuHome (path /= "/")
    -- , Element.text "|"
    -- , menuDev (path /= "/projects")
    , Element.text "|"
    , menuBlog (path /= "/blog")
    ]


menuHome : Bool -> Element.Element msg
menuHome enabled =
    case enabled of
        True ->
            Element.link []
                { url = "/"
                , label = Element.text "Home"
                }

        False ->
            Element.el
                [ Font.color Theme.siteTheme.disabledFontColor ]
                (Element.text "Home")


-- menuDev : Bool -> Element.Element msg
-- menuDev enabled =
--     case enabled of
--         True ->
--             Element.link []
--                 { url = "/projects"
--                 , label = Element.text "Dev"
--                 }

--         False ->
--             Element.el
--                 [ Font.color Theme.siteTheme.disabledFontColor ]
--                 (Element.text "Dev")


menuBlog : Bool -> Element.Element msg
menuBlog enabled =
    case enabled of
        True ->
            Element.link []
                { url = "https://tehj.io/blog"
                , label = Element.text "Blog"
                }

        False ->
            Element.el
                [ Font.color Theme.siteTheme.disabledFontColor ]
                (Element.text "Blog")


footer : Element.Element msg
footer =
    Element.row
        [ Element.centerX, Element.spacing Theme.siteTheme.footerSpacing ]
        [ View.iconLink [] { url = "https://github.com/julwrites", src = "assets/images/dark/github.png", description = "Github" }
        , View.iconLink []
            { url = "https://linkedin.com/in/julwrites", src = "assets/images/dark/linkedin.png", description = "LinkedIn" }
        , Element.download []
            { url = "assets/resume/Resume_Julian_Teh.pdf"
            , label = View.iconLink [] { url = "assets/resume/Resume_Julian_Teh.pdf", src = "assets/images/dark/download.png", description = "Resume" }
            }
        ]
