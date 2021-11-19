module Main exposing (..)

-- We are using Elm-UI as the base UI framework, which exposes Element

import Browser
import Element exposing (Color, Element, alignRight, centerX, el, fill, link, padding, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Http



-- MAIN
-- Note: main must be of type Html, Svg or Programs


type alias Flags =
    {}


type alias Model =
    ()


type Msg
    = NoOp


type alias Theme =
    { borderColor : Color
    , backgroundColor : Color
    , fontColor : Color
    , padding : Int
    , menuSpacing : Int
    , contentSpacing : Int
    }


siteTheme : Theme
siteTheme =
    { borderColor = rgb255 0 0 0
    , backgroundColor = rgb255 34 44 60
    , fontColor = rgb255 255 255 255
    , padding = 30
    , menuSpacing = 80
    , contentSpacing = 30
    }


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
            [ Background.color siteTheme.backgroundColor
            , Font.color siteTheme.fontColor
            ]
            -- The layout's element; remember, elm-ui adopts a 1 child policy
            -- Elements of the resulting model
            landing
        ]
    }


landing : Element msg
landing =
    Element.column
        [ centerX, spacing siteTheme.contentSpacing, padding siteTheme.padding ]
        [ menu
        , blurb
        , footer
        ]


menu : Element msg
menu =
    Element.row
        [ centerX, spacing siteTheme.menuSpacing ]
        [ Element.el [] (Element.text "About")
        , Element.text "Projects"
        , Element.text "Blog"
        ]


blurb : Element msg
blurb =
    Element.column
        [ centerX ]
        [ Element.el [ Font.size 40 ] (text "Hi, I'm Julian")
        , Element.el [] (text "Welcome to my domain")
        ]


footer : Element msg
footer =
    Element.row
        [ centerX, spacing siteTheme.menuSpacing ]
        [ Element.link []
            { url = "https://github.com/julwrites", label = Element.text "Github" }
        , Element.link []
            { url = "https://linkedin.com/julreads", label = Element.text "LinkedIn" }
        , Element.link []
            { url = "mail@tehj.io", label = Element.text "Email" }
        ]
