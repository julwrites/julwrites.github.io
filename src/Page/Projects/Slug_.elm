module Page.Projects.Slug_ exposing (Data, Model, Msg, page)

import Blog
import DataSource exposing (DataSource)
import DataSource.File as File
import DataSource.Glob as Glob
import Element
import ElmUIMarkdownRenderer
import Head
import Head.Seo as Seo
import Html exposing (..)
import Markdown.Block exposing (Block)
import Markdown.Parser
import Markdown.Renderer
import OptimizedDecoder as Decode exposing (Decoder)
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Shared
import Theme
import View exposing (View, iconLink)


type alias Model =
    ()


type alias Msg =
    Blog.Msg


type alias Data =
    Blog.Data


page : Page Blog.RouteParams Blog.Data
page =
    Page.prerender
        { data = data
        , head = head
        , routes = routes
        }
        |> Page.buildNoState { view = view }


head :
    StaticPayload Blog.Data Blog.RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "tehj.io"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "TODO"
        , locale = Nothing
        , title = "tehj.io" -- metadata.title -- TODO
        }
        |> Seo.website


routes : DataSource (List Blog.RouteParams)
routes =
    Blog.blogPostsGlob
        |> DataSource.map
            (List.map
                (\globData ->
                    { slug = globData.slug }
                )
            )


data =
    Blog.data


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data Blog.RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    Blog.view maybeUrl sharedModel static "/projects"
