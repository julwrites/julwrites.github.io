module Main exposing (..)

-- We are using Elm-UI as the base UI framework, which exposes Element
-- Importing modules to make up this webpage

import About
import Browser
import Browser.Navigation as Nav
import Element exposing (Element, centerX, padding, spacing, text)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Floating
import Home
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
        [ Floating.menu
        , body model
        , Floating.footer
        ]


body : Model -> Element msg
body model =
    if model.url.path == "/about" then
        About.body

    else
        Home.blurb
