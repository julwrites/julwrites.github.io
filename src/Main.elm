module Main exposing (..)

-- We are using Elm-UI as the base UI framework, which exposes Element
-- Importing modules to make up this webpage

import Browser
import Browser.Navigation as Nav
import Element exposing (Color, Element, alignRight, centerX, el, fill, height, link, padding, px, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html exposing (..)
import Html.Attributes exposing (..)
import Http
import Theme as Theme
import Url
import Url.Parser exposing ((</>), Parser, int, map, oneOf, s, string)



-- MAIN
-- Note: main must be of type Html, Svg or Programs


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    }


type Route
    = Topic String
    | Blog Int
    | User String
    | Comment String Int


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( Model key url, Cmd.none )


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- As an application, we now need to multiplex in view based on the model value


view : Model -> Browser.Document Msg
view model =
    { title = "tehj.io"
    , body =
        [ Element.layout
            -- The list of attributes
            [ Background.color Theme.siteTheme.backgroundColor
            , Font.color Theme.siteTheme.fontColor
            , Font.family Theme.siteTheme.fontFamily
            ]
            -- The layout's element; remember, elm-ui adopts a 1 child policy
            -- Elements of the resulting model
            (page model)
        ]
    }


page : Model -> Element msg
page model =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing, padding Theme.siteTheme.padding ]
        [ menu
        , body model
        , footer
        ]


body : Model -> Element msg
body model =
    if model.url.path == "/about" then
        about

    else
        blurb



--------------------------------------------------
-- Floating elements


menu : Element msg
menu =
    Element.row
        [ centerX, spacing Theme.siteTheme.menuSpacing ]
        [ Element.link []
            { url = "/about"
            , label = Element.text "About"
            }
        , Element.text "Projects"
        , Element.text "Blog"
        ]


footer : Element msg
footer =
    Element.row
        [ centerX, spacing Theme.siteTheme.footerSpacing ]
        [ iconLink { url = "https://github.com/julwrites", src = "assets/images/dark/github.png", description = "Github" }
        , iconLink
            { url = "https://linkedin.com/in/julwrites", src = "assets/images/dark/linkedin.png", description = "LinkedIn" }
        , iconLink
            { url = "mail@tehj.io", src = "assets/images/dark/email.png", description = "Email" }
        ]


iconLink : { url : String, src : String, description : String } -> Element msg
iconLink def =
    Element.link []
        { url = def.url, label = Element.image [ Element.width (px 33), Element.height (px 33) ] { src = def.src, description = def.description } }



--------------------------------------------------
-- Home page


blurb : Element msg
blurb =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ centerX, Font.size 40, Font.medium ] (Element.text "Hi, I'm Julian")
        , Element.el [ centerX ] (Element.text "Welcome to my domain")
        ]



--------------------------------------------------
-- About page


about : Element msg
about =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ profilePhoto
        , Element.el [] (Element.text "Love Christ, Create Things, Bless People, Speak Truth")
        ]


profilePhoto : Element msg
profilePhoto =
    -- Element.el [] (Element.image [] { src = "assets/images/photos/" ++ String.fromInt (Random.int 0 2) ++ ".png", description = "Personal Photo" })
    Element.el [] (Element.image [] { src = "assets/images/photos/2.jpg", description = "Personal Photo" })
