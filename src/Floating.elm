module Floating exposing (..)

import Element exposing (Color, Element, alignRight, centerX, el, fill, height, link, padding, px, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Theme


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
