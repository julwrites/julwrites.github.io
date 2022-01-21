module Theme exposing (Theme, siteTheme)

import Element exposing (Color, Element, alignRight, centerX, el, fill, height, link, padding, px, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font


type alias Theme =
    { borderColor : Color
    , backgroundColor : Color
    , fontColor : Color
    , fontFamily : List Font.Font
    , padding : Int
    , menuSpacing : Int
    , footerSpacing : Int
    , contentSpacing : Int
    }


siteTheme : Theme
siteTheme =
    { borderColor = rgb255 0 0 0
    , backgroundColor = rgb255 34 44 60
    , fontColor = rgb255 255 255 255
    , fontFamily = [ Font.external { name = "Belligerent Madness", url = "https://allfont.net/allfont.css?fonts=belligerent-madness" }, Font.sansSerif ]
    , padding = 30
    , menuSpacing = 80
    , footerSpacing = 150
    , contentSpacing = 30
    }
