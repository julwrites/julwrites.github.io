module About exposing (body)

import Element exposing (Color, Element, alignRight, centerX, el, fill, height, link, padding, px, rgb255, row, spacing, text, width)
import Element.Font as Font
import Random
import Theme


body : Element msg
body =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ profilePhoto
        , Element.el [] (Element.text "Love Christ, Create Things, Bless People, Speak Truth")
        ]


profilePhoto : Element msg
profilePhoto =
    -- Element.el [] (Element.image [] { src = "assets/images/photos/" + String.fromInt (Random.generate (Random.int 0 2)) + ".png", description = "Personal Photo" })
    Element.el [] (Element.image [] { src = "assets/images/photos/0.png", description = "Personal Photo" })
