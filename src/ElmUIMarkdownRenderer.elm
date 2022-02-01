module ElmUIMarkdownRenderer exposing (renderer)

import Css
import Element
import Element.Background as Background
import Element.Font as Font
import Markdown.Block as Block
import Markdown.Html
import Markdown.Renderer
import SyntaxHighlight


renderer : Markdown.Renderer.Renderer (Element.Element msg)
renderer =
    { heading = heading
    , paragraph = Element.paragraph []
    , thematicBreak = Element.row [ Element.padding 10 ] []
    , text = Element.text
    , strong = \content -> Element.paragraph [ Font.bold ] content
    , emphasis = \content -> Element.paragraph [ Font.italic ] content
    , strikethrough = \children -> Element.paragraph [ Font.strike ] children
    , blockQuote = Element.paragraph [ Font.italic ]
    , codeSpan = codeSpan
    , link = \{ destination } body -> Element.link [] { url = destination, label = Element.paragraph [] body }
    , hardLineBreak = Element.row [ Element.padding 5 ] []
    , image = \image -> Element.image [ Element.width (Element.fill |> Element.maximum 800) ] { src = image.src, description = image.alt }
    , unorderedList = uList
    , orderedList = oList
    , html = Markdown.Html.oneOf []
    , codeBlock = codeBlock
    , table = \table -> Element.table [] { data = table, columns = [] }
    , tableHeader = Element.row [ Font.bold ]
    , tableBody = \body -> Element.table [] { data = body, columns = [] }
    , tableRow = Element.row []
    , tableHeaderCell = \alignment -> \body -> Element.paragraph [ Font.bold ] body
    , tableCell = \alignment -> \body -> Element.paragraph [] body
    }


heading : { level : Block.HeadingLevel, rawText : String, children : List (Element.Element msg) } -> Element.Element msg
heading { level, rawText, children } =
    case level of
        Block.H1 ->
            Element.el [ Font.bold, Font.size 40 ] (Element.paragraph [] children)

        Block.H2 ->
            Element.el [ Font.semiBold, Font.size 35 ] (Element.paragraph [] children)

        Block.H3 ->
            Element.el [ Font.semiBold, Font.size 30 ] (Element.paragraph [] children)

        Block.H4 ->
            Element.el [ Font.size 25 ] (Element.paragraph [] children)

        Block.H5 ->
            Element.el [ Font.bold, Font.size 20 ] (Element.paragraph [] children)

        Block.H6 ->
            Element.el [ Font.semiBold, Font.size 20 ] (Element.paragraph [] children)


codeSpan : String -> Element.Element msg
codeSpan content =
    Element.paragraph [ Font.color (Element.rgb255 224 224 224) ]
        [ SyntaxHighlight.elm content
            |> Result.map SyntaxHighlight.toInlineHtml
            |> Result.map Element.html
            |> Result.withDefault (Element.text content)
        ]


codeBlock : { body : String, language : Maybe String } -> Element.Element msg
codeBlock details =
    Element.el
        [ Element.centerX, Background.color (Element.rgb255 54 54 70), Element.width (Element.fill |> Element.maximum 800), Element.padding 10 ]
        (SyntaxHighlight.elm
            details.body
            |> Result.map SyntaxHighlight.toInlineHtml
            -- TODO: Parse the static inline Html and actually add them as elements with correct spacing
            |> Result.map (\block -> Element.paragraph [] [ Element.html block ])
            |> Result.withDefault (Element.paragraph [] [ Element.text details.body ])
        )


uList : List (Block.ListItem (Element.Element msg)) -> Element.Element msg
uList items =
    Element.column
        [ Element.padding 15 ]
        (items
            |> List.map
                (\item ->
                    case item of
                        Block.ListItem _ children ->
                            Element.paragraph []
                                (Element.text "- "
                                    :: children
                                )
                )
        )


oList : Int -> List (List (Element.Element msg)) -> Element.Element msg
oList startingIndex items =
    Element.column
        [ Element.padding 15 ]
        (items
            |> List.indexedMap
                (\i itemBlocks ->
                    Element.paragraph []
                        (Element.text (String.fromInt (i + 1) ++ ". ")
                            :: itemBlocks
                        )
                )
        )
