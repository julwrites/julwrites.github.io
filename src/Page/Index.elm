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
            [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
            [ Element.column [ Element.spacing 25, Element.alignRight ]
                [ Element.el [ Element.centerX, Font.size 40, Font.medium ] (Element.text "Hi, I'm Julian")
                , profilePhoto [ Element.centerX ]
                , Element.el [ Element.centerX, Font.size 25 ] (Element.text "Welcome to my domain")

                -- , Element.el [ Font.size 15 ] (Element.text "Love Christ | Create Things | Bless People | Speak Truth")
                ]
            ]
    }


profilePhoto : List (Element.Attribute msg) -> Element.Element msg
profilePhoto attrs =
    Element.image (Element.width (Element.fill |> Element.maximum 256) :: attrs)
        { src = "assets/images/photos/2.jpg"
        , description = "Personal Photo"
        }
