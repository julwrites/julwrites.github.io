module Page.Index exposing (Data, Model, Msg, page)

import DataSource exposing (DataSource)
import Element
import Element.Font as Font
import Element.Region as Region
import Head
import Head.Seo as Seo
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Shared
import Theme
import View exposing (View)


type alias Model =
    ()


type alias Msg =
    Never


type alias RouteParams =
    {}


page : Page RouteParams Data
page =
    Page.single
        { head = head
        , data = data
        }
        |> Page.buildNoState { view = view }


data : DataSource Data
data =
    DataSource.succeed ()


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "TODO"
        , locale = Nothing
        , title = "TODO title" -- metadata.title -- TODO
        }
        |> Seo.website


type alias Data =
    ()


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = "tehj.io"
    , body =
        Element.column
            [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing, Element.width (Element.fill |> Element.maximum sharedModel.window.width) ]
            [ Element.column [ Element.spacing 25, Element.alignRight ]
                [ Element.el [ Element.centerX, Font.size 40, Font.medium ] (Element.text "Hi, I'm Julian")
                , profilePhoto [ Element.centerX ]
                , Element.el [ Element.centerX, Font.size 25 ] (Element.text "Welcome to my domain")

                -- , Element.el [ Font.size 15 ] (Element.text "Love Christ | Create Things | Bless People | Speak Truth")
                , projectListing 
                ]
            ]
    }


profilePhoto : List (Element.Attribute msg) -> Element.Element msg
profilePhoto attrs =
    Element.image (Element.width (Element.fill |> Element.maximum 256) :: attrs)
        { src = "assets/images/photos/2.jpg"
        , description = "Personal Photo"
        }



projectListing : Element.Element msg
projectListing =
    Element.column
        [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "DigiPen Projects")
        , Element.wrappedRow [ Element.centerX, Element.spacing 50, Element.spaceEvenly ]
            [ thumbnailLink [] { url = "http://games.digipen.edu/games/bibbb", src = "assets/images/projects/BIBBB_1.jpg", description = "BIBBB" }
            , thumbnailLink [] { url = "http://games.digipen.edu/games/flowline", src = "assets/images/projects/Flowline_1.jpg", description = "Flowline" }
            , thumbnailLink [] { url = "http://games.digipen.edu/games/shortcircuit", src = "assets/images/projects/ShortCircuit_1.jpg", description = "Short Circuit" }
            ]
        , Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "Personal Projects")
        , Element.wrappedRow [ Element.centerX, Element.spacing 50 ]
            [ thumbnailLink [] { url = "https://github.com/julwrites/vscodecmder", src = "assets/images/projects/vscodecmder.jpg", description = "VSCodeCmder" }
            , thumbnailLink [] { url = "https://github.com/julwrites/ScriptureBot", src = "assets/images/projects/scripturebot.png", description = "ScriptureBot" }
            ]
        ]


thumbnailLink : List (Element.Attribute msg) -> { url : String, src : String, description : String } -> Element.Element msg
thumbnailLink attrs def =
    Element.link
        (Element.paddingXY 32 0
            :: attrs
        )
        { url = def.url, label = Element.image [ Element.height (Element.px 128) ] { src = def.src, description = def.description } }


