module Page.Projects exposing (Data, Model, Msg, page)

import Blog exposing (Post)
import DataSource exposing (DataSource)
import DevBlog exposing (contents)
import Element
import Element.Font as Font
import Element.Region as Region
import Head
import Head.Seo as Seo
import Page exposing (Page, PageWithState, StaticPayload)
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


type alias Data =
    ()


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
            [ projectListing
            , devBlogListing
            ]
    }


projectListing : Element.Element msg
projectListing =
    Element.column
        [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "DigiPen Projects")
        , Element.el [ Element.centerX ] (Element.text "During my time in DigiPen, we developed several games")
        , Element.row [ Element.centerX, Element.spacing 50, Element.spaceEvenly ]
            [ thumbnailLink { url = "http://games.digipen.edu/games/bibbb", src = "assets/images/projects/BIBBB_1.jpg", description = "BIBBB" }
            , thumbnailLink { url = "http://games.digipen.edu/games/flowline", src = "assets/images/projects/Flowline_1.jpg", description = "Flowline" }
            , thumbnailLink { url = "http://games.digipen.edu/games/shortcircuit", src = "assets/images/projects/ShortCircuit_1.jpg", description = "Short Circuit" }
            ]
        , Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "Personal Projects")
        , Element.el [ Element.centerX ] (Element.text "As part of a constant effort to learn, I take up little hobby projects in my spare time")
        , Element.row [ Element.centerX, Element.spacing 50, Element.spaceEvenly ]
            [ thumbnailLink { url = "https://github.com/julwrites/vscodecmder", src = "assets/images/projects/vscodecmder.jpg", description = "VSCodeCmder" }
            , thumbnailLink { url = "https://github.com/julwrites/ScriptureBot", src = "assets/images/projects/scripturebot.png", description = "ScriptureBot" }
            ]
        ]


thumbnailLink : { url : String, src : String, description : String } -> Element.Element msg
thumbnailLink def =
    Element.link [ Element.paddingXY 32 0 ]
        { url = def.url, label = Element.image [ Element.height (Element.px 128) ] { src = def.src, description = def.description } }


devBlogPostBlurb : Blog.Post -> Element.Element msg
devBlogPostBlurb postDetail =
    Element.link []
        { url = "blog/" ++ postDetail.id
        , label =
            Element.column []
                [ Element.row [ Element.spacing 20 ]
                    [ Element.el [ Font.size 20 ] (Element.text postDetail.title)
                    , Element.el [ Font.size 15 ] (Element.text postDetail.date)
                    ]
                , Element.paragraph [ Font.size 15 ] [ Element.text postDetail.desc ]
                ]
        }


devBlogListing : Element.Element msg
devBlogListing =
    Element.column
        [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "Project Log")
        , Element.el [ Element.centerX ] (Element.text "As I tinker with things, I try to write down what I've done")
        , Element.column [ Element.centerX, Element.spacing 20, Element.width (Element.fill |> Element.maximum 800) ]
            (List.map devBlogPostBlurb DevBlog.contents)
        ]
