module Main exposing (..)

import Element exposing (Element, alignRight, centerY, el, fill, padding, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font



-- main is a the 'monolithic' model describing this application
-- Note: main must be of type Html, Svg or Programs


main =
    Element.layout
        -- The list of attributes
        []
        -- The layout's element; remember, elm-ui adopts a 1 child policy
        -- Elements of the resulting model
        landing


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
        [ Element.el [] (Element.text "About"), Element.text "Projects", Element.text "Blog" ]


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
        [ Element.el [] (text "Github")
        , Element.el [] (text "LinkedIn")
        , Element.el [] (text "Email")
        ]
