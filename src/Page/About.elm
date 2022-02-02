module Page.About exposing (Data, Model, Msg, page)

import DataSource exposing (DataSource)
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
            [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
            [ profilePhoto
            , Element.el [] (Element.text "Love Christ, Create Things, Bless People, Speak Truth")
            , Element.row [ Element.centerX, Element.spacing 10 ]
                [ Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "Work I've done:")
                , Element.download []
                    { url = "assets/resume/Resume_Julian_Teh.pdf"
                    , label = Element.image [ Element.width (Element.px 33), Element.height (Element.px 33) ] { src = "assets/images/dark/download.png", description = "Resume" }
                    }
                ]
            ]
    }


profilePhoto : Element.Element msg
profilePhoto =
    Element.image [ Element.height (Element.px 512) ] { src = "assets/images/photos/2.jpg", description = "Personal Photo" }
