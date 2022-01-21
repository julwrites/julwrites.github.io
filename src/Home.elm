module Home exposing (blurb)

import Element exposing (Color, Element, alignRight, centerX, el, fill, height, link, padding, px, rgb255, row, spacing, text, width)
import Element.Border as Border
import Element.Font as Font
import Theme


blurb : Element msg
blurb =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ centerX, Font.size 40, Font.medium ] (Element.text "Hi, I'm Julian")
        , Element.el [ centerX ] (Element.text "Welcome to my domain")
        ]
