module Main exposing (..)

-- We are using Elm-UI as the base UI framework, which exposes Element

import Browser
import Element exposing (Element, alignRight, centerY, el, fill, link, padding, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html exposing (Html, pre)
import Http



-- MAIN
-- Note: main must be of type Html, Svg or Programs


type alias Flags =
    {}


type alias Model =
    ()


type Msg
    = NoOp


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( (), Cmd.none )


main : Program Flags Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Browser.Document Msg
view _ =
    { title = "tehj.io"
    , body =
        [ Element.layout
            -- The list of attributes
            []
            -- The layout's element; remember, elm-ui adopts a 1 child policy
            -- Elements of the resulting model
            landing
        ]
    }


landing : Element msg
landing =
    Element.column []
        [ menu
        , blurb
        , footer
        ]


menu : Element msg
menu =
    Element.row
        []
        [ Element.el [] (Element.text "About")
        , Element.text "Projects"
        , Element.text "Blog"
        ]


blurb : Element msg
blurb =
    Element.column
        []
        [ Element.el [] (text "Hi, I'm Julian")
        , Element.el [] (text "Welcome to my domain")
        ]


footer : Element msg
footer =
    Element.row
        []
        [ Element.link []
            { url = "https://github.com/julwrites", label = Element.text "Github" }
        , Element.link []
            { url = "https://linkedin.com/julreads", label = Element.text "LinkedIn" }
        , Element.link []
            { url = "mail@tehj.io", label = Element.text "Email" }
        ]
