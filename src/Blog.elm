module Blog exposing (BlogPost, Data, Msg, Post, RouteParams, blogPostsGlob, data, postBlurb, view)

-- This module defines the Blog specific common code

import DataSource exposing (DataSource)
import DataSource.File as File
import DataSource.Glob as Glob
import Element
import Element.Font as Font
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


type alias Post =
    { id : String
    , date : String
    , title : String
    , desc : String
    , parent : String
    }


postBlurb : Post -> Element.Element msg
postBlurb postDetail =
    Element.link []
        { url = postDetail.parent ++ "/" ++ postDetail.id
        , label =
            Element.column []
                [ Element.wrappedRow [ Element.spacing 20 ]
                    [ Element.paragraph [ Font.size 20, Element.alignLeft ] [ Element.text postDetail.title ]
                    , Element.el [ Font.size 15, Element.alignRight ] (Element.text postDetail.date)
                    ]
                , Element.paragraph [ Font.size 15 ] [ Element.text postDetail.desc ]
                ]
        }


type alias Msg =
    Never


type alias Data =
    String


type alias BlogPost =
    { filePath : String
    , slug : String
    }


type alias RouteParams =
    { slug : String }


blogPostsGlob : DataSource.DataSource (List { filePath : String, slug : String })
blogPostsGlob =
    Glob.succeed BlogPost
        |> Glob.captureFilePath
        |> Glob.match (Glob.literal "content/blog/")
        |> Glob.capture Glob.wildcard
        |> Glob.match (Glob.literal ".md")
        |> Glob.toDataSource


data : RouteParams -> DataSource Data
data route =
    File.rawFile ("content/blog/" ++ route.slug ++ ".md")


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> String
    -> View Msg
view maybeUrl sharedModel static parent =
    { title = "tehj.io"
    , body =
        Element.column [ Element.centerX, Element.spacing Theme.siteTheme.contentSpacing, Element.width (Element.fill |> Element.maximum sharedModel.window.width) ]
            [ View.iconLink [ Element.centerX ] { url = parent, src = "../assets/images/dark/backarrow.png", description = "Back" }
            , Element.column [ Element.centerX, Element.spacing 20, Element.width (Element.fill |> Element.maximum sharedModel.window.width) ]
                (renderMd static.data)

            -- NOTE: For using defaultHtmlRenderer
            -- (List.map
            --     (\renderedHtml -> Element.paragraph [ Element.width (Element.fill |> Element.maximum sharedModel.window.width) ] [ Element.html renderedHtml ])
            --     (renderMd static.data)
            -- )
            ]
    }



-- NOTE: For using defaultHtmlRenderer
-- renderMd : Data -> List (Html msg)


renderMd : Data -> List (Element.Element msg)
renderMd staticData =
    staticData
        |> Markdown.Parser.parse
        |> Result.mapError deadEndsToString
        |> Result.andThen
            (\ast ->
                Markdown.Renderer.render
                    -- NOTE: For using defaultHtmlRenderer
                    -- Markdown.Renderer.defaultHtmlRenderer
                    ElmUIMarkdownRenderer.renderer
                    ast
            )
        |> Result.withDefault []


deadEndsToString deadEnds =
    deadEnds
        |> List.map Markdown.Parser.deadEndToString
        |> String.join "\n"
