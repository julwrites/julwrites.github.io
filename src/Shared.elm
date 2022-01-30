module Shared exposing (Data, Model, Msg(..), SharedMsg(..), template)

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
import Theme
import Url
import View exposing (View)


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


type alias Data =
    ()


type SharedMsg
    = NoOp


type alias Model =
    {}


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
    ( {}
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnPageChange _ ->
            ( model, Cmd.none )

        SharedMsg globalMsg ->
            ( model, Cmd.none )


subscriptions : Path -> Model -> Sub Msg
subscriptions _ _ =
    Sub.none


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
    , body = templateView pageView
    }


templateView : View msg -> Html msg
templateView pageView =
    Element.layout
        [ Background.color Theme.siteTheme.backgroundColor
        , Font.color Theme.siteTheme.fontColor
        , Font.family Theme.siteTheme.fontFamily
        ]
        (Element.column
            [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing, Element.padding Theme.siteTheme.padding ]
            [ menu
            , pageView.body
            , footer
            ]
        )


menu : Element.Element msg
menu =
    Element.row
        [ Region.navigation, Element.centerX, Element.spacing Theme.siteTheme.menuSpacing ]
        [ Element.link []
            { url = "/"
            , label = Element.text "Home"
            }
        , Element.link []
            { url = "/about"
            , label = Element.text "About"
            }
        , Element.link []
            { url = "/projects"
            , label = Element.text "Projects"
            }
        ]


footer : Element.Element msg
footer =
    Element.row
        [ Element.centerX, Element.spacing Theme.siteTheme.footerSpacing ]
        [ iconLink { url = "https://github.com/julwrites", src = "assets/images/dark/github.png", description = "Github" }
        , iconLink
            { url = "https://linkedin.com/in/julwrites", src = "assets/images/dark/linkedin.png", description = "LinkedIn" }
        , iconLink
            { url = "mail@tehj.io", src = "assets/images/dark/email.png", description = "Email" }
        ]


iconLink : { url : String, src : String, description : String } -> Element.Element msg
iconLink def =
    Element.link []
        { url = def.url, label = Element.image [ Element.width (Element.px 33), Element.height (Element.px 33) ] { src = def.src, description = def.description } }
