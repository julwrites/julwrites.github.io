module Page.Blog exposing (Data, Model, Msg, page)

-- This module defines the blog page

import Blog exposing (Post, postBlurb)
import Contents exposing (contents)
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
            [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing, Element.width (Element.fill |> Element.maximum sharedModel.window.width) ]
            [ blogListing
            ]
    }


blogListing : Element.Element msg
blogListing =
    Element.column
        [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ Region.heading 2, Element.centerX, Font.size 30, Font.medium ] (Element.text "Project Log")
        , Element.column [ Element.centerX, Element.spacing 20, Element.width (Element.fill |> Element.maximum 800) ]
            (List.map
                (\post ->
                    case post.parent of
                        "/blog" ->
                            Blog.postBlurb post

                        _ ->
                            Element.none
                )
                Contents.contents
            )
        ]
