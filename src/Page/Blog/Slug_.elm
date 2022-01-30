module Page.Blog.Slug_ exposing (Data, Model, Msg, page)

import DataSource exposing (DataSource)
import DataSource.File as File
import DataSource.Glob as Glob
import Element
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
import View exposing (View)


type alias Model =
    ()


type alias Msg =
    Never


type alias RouteParams =
    { slug : String }


page : Page RouteParams Data
page =
    Page.prerender
        { data = data
        , head = head
        , routes = routes
        }
        |> Page.buildNoState { view = view }


type alias Data =
    String


head :
    StaticPayload Data RouteParams
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


type alias BlogPost =
    { filePath : String
    , slug : String
    }


blogPostsGlob : DataSource.DataSource (List { filePath : String, slug : String })
blogPostsGlob =
    Glob.succeed BlogPost
        |> Glob.captureFilePath
        |> Glob.match (Glob.literal "content/blog/")
        |> Glob.capture Glob.wildcard
        |> Glob.match (Glob.literal ".md")
        |> Glob.toDataSource


routes : DataSource (List RouteParams)
routes =
    blogPostsGlob
        |> DataSource.map
            (List.map
                (\globData ->
                    { slug = globData.slug }
                )
            )


data : RouteParams -> DataSource Data
data route =
    File.rawFile ("content/blog/" ++ route.slug ++ ".md")


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = "tehj.io"
    , body = Element.text static.data
    }



-- , body =
--     Markdown.Renderer.render
--         Markdown.Renderer.defaultHtmlRenderer
--         (Markdown.Parser.parse
--             static.data
--         )
-- }
