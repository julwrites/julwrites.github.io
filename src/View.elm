module View exposing (View, iconLink, map, placeholder)

import Element exposing (Element)


type alias View msg =
    { title : String
    , body : Element msg

    -- , body : List (Element msg)
    }



-- You shouldn't need to use this map


map : (msg1 -> msg2) -> View msg1 -> View msg2
map fn doc =
    { title = doc.title
    , body = Element.map fn doc.body

    -- , body = List.map (Element.map fn) doc.body
    }



-- You shouldn't need to use this placeholder except for scaffolding


placeholder : String -> View msg
placeholder moduleName =
    { title = "Placeholder - " ++ moduleName
    , body = Element.text moduleName

    -- , body = [ Element.text moduleName ]
    }


iconLink : List (Element.Attribute msg) -> { url : String, src : String, description : String } -> Element.Element msg
iconLink attrs def =
    Element.link attrs
        { url = def.url, label = Element.image [ Element.width (Element.px 33), Element.height (Element.px 33) ] { src = def.src, description = def.description } }
