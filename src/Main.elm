module Main exposing (..)

-- We are using Elm-UI as the base UI framework, which exposes Element
-- Importing modules to make up this webpage

import Browser
import Browser.Navigation as Nav
import Element exposing (Color, Element, alignRight, centerX, el, fill, height, link, padding, px, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Font as Font
import Element.Region as Region
import Html exposing (..)
import Html.Attributes exposing (..)
import Http
import Theme as Theme
import Url
import Url.Parser exposing ((</>), (<?>), Parser, int, map, oneOf, s, string, top)
import Url.Parser.Query as Query



-- MAIN
-- Note: main must be of type Html, Svg or Programs


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    }


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( Model key url, Cmd.none )


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- As an application, we now need to multiplex in view based on the model value


view : Model -> Browser.Document Msg
view model =
    { title = "tehj.io"
    , body =
        [ Element.layout
            -- The list of attributes
            [ Background.color Theme.siteTheme.backgroundColor
            , Font.color Theme.siteTheme.fontColor
            , Font.family Theme.siteTheme.fontFamily
            ]
            -- The layout's element; remember, elm-ui adopts a 1 child policy
            -- Elements of the resulting model
            (page model)
        ]
    }


page : Model -> Element msg
page model =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing, padding Theme.siteTheme.padding ]
        [ menu
        , body model
        , footer
        ]


type Route
    = Home
    | About
    | Projects
    | Blog
    | BlogPost String
      -- | BlogQuery (Maybe String)
    | NotFound


route : Parser (Route -> a) a
route =
    oneOf
        [ Url.Parser.map Home top
        , Url.Parser.map About (Url.Parser.s "about")
        , Url.Parser.map Projects (Url.Parser.s "projects")
        , Url.Parser.map Blog (Url.Parser.s "blog")
        , Url.Parser.map BlogPost (Url.Parser.s "blog" </> Url.Parser.string)

        -- , Url.Parser.map BlogQuery (Url.Parser.s "blog" <?> Query.string "q")
        ]


routeUrl : String -> Route
routeUrl string =
    case Url.fromString string of
        Nothing ->
            NotFound

        Just url ->
            Maybe.withDefault NotFound (Url.Parser.parse route url)


body : Model -> Element msg
body model =
    case routeUrl (Url.toString model.url) of
        Home ->
            blurb

        About ->
            about

        Projects ->
            projects

        Blog ->
            blog

        BlogPost post ->
            blogPost post

        --         BlogQuery query ->
        --             blog query
        NotFound ->
            Element.el [ centerX, Font.size 40, Font.medium ] (Element.text "Sorry, I haven't made this page")



--     if model.url.path == "/about" then
--         about
--     else if model.url.path == "/projects" then
--         projects
--     else if Url.Parser.parse route model.url.path then
--         blog
--     else
--         blurb
--------------------------------------------------
-- Floating elements


menu : Element msg
menu =
    Element.row
        [ Region.navigation, centerX, spacing Theme.siteTheme.menuSpacing ]
        [ Element.link []
            { url = "/"
            , label = Element.text "Home"
            }
        , Element.link []
            { url = "/about"
            , label = Element.text "About"
            }
        , Element.link []
            { url = "/projects"
            , label = Element.text "Projects"
            }
        , Element.link []
            { url = "/blog"
            , label = Element.text "Blog"
            }
        ]


footer : Element msg
footer =
    Element.row
        [ centerX, spacing Theme.siteTheme.footerSpacing ]
        [ iconLink { url = "https://github.com/julwrites", src = "assets/images/dark/github.png", description = "Github" }
        , iconLink
            { url = "https://linkedin.com/in/julwrites", src = "assets/images/dark/linkedin.png", description = "LinkedIn" }
        , iconLink
            { url = "mail@tehj.io", src = "assets/images/dark/email.png", description = "Email" }
        ]


iconLink : { url : String, src : String, description : String } -> Element msg
iconLink def =
    Element.link []
        { url = def.url, label = Element.image [ Element.width (px 33), Element.height (px 33) ] { src = def.src, description = def.description } }



--------------------------------------------------
-- Home page


blurb : Element msg
blurb =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ centerX, Font.size 40, Font.medium ] (Element.text "Hi, I'm Julian")
        , Element.el [ centerX ] (Element.text "Welcome to my domain")
        ]



--------------------------------------------------
-- about page


about : Element msg
about =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ profilePhoto
        , Element.el [] (Element.text "Love Christ, Create Things, Bless People, Speak Truth")
        , Element.row [ centerX, Element.spacing 10 ]
            [ Element.el [ Region.heading 2, centerX, Font.size 30, Font.medium ] (Element.text "Work I've done:")
            , Element.download []
                { url = "assets/resume/Resume_Julian_Teh.pdf"
                , label = Element.image [ Element.width (px 33), Element.height (px 33) ] { src = "assets/images/dark/download.png", description = "Resume" }
                }
            ]
        ]


profilePhoto : Element msg
profilePhoto =
    Element.image [ Element.height (px 512) ] { src = "assets/images/photos/2.jpg", description = "Personal Photo" }



--------------------------------------------------
-- project page


projects : Element msg
projects =
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ Region.heading 2, centerX, Font.size 30, Font.medium ] (Element.text "DigiPen Projects")
        , Element.el [ centerX ] (Element.text "During my time in DigiPen, we developed several games")
        , Element.row [ centerX, Element.spacing 50, Element.spaceEvenly ]
            [ thumbnailLink { url = "http://games.digipen.edu/games/bibbb", src = "assets/images/projects/BIBBB_1.jpg", description = "BIBBB" }
            , thumbnailLink { url = "http://games.digipen.edu/games/flowline", src = "assets/images/projects/Flowline_1.jpg", description = "Flowline" }
            , thumbnailLink { url = "http://games.digipen.edu/games/shortcircuit", src = "assets/images/projects/ShortCircuit_1.jpg", description = "Short Circuit" }
            ]
        , Element.el [ Region.heading 2, centerX, Font.size 30, Font.medium ] (Element.text "Personal Projects")
        , Element.el [ centerX ] (Element.text "As part of a constant effort to learn, I take up little hobby projects in my spare time")
        , Element.row [ centerX, Element.spacing 50, Element.spaceEvenly ]
            [ thumbnailLink { url = "https://github.com/julwrites/vscodecmder", src = "assets/images/projects/vscodecmder.jpg", description = "VSCodeCmder" }
            , thumbnailLink { url = "https://github.com/julwrites/ScriptureBot", src = "assets/images/projects/scripturebot.png", description = "ScriptureBot" }
            ]

        -- TODO: Add in the dev blog down here
        ]


thumbnailLink : { url : String, src : String, description : String } -> Element msg
thumbnailLink def =
    Element.link [ Element.paddingXY 32 0 ]
        { url = def.url, label = Element.image [ Element.height (px 128) ] { src = def.src, description = def.description } }



--------------------------------------------------
-- blog page


blog : Element msg
blog =
    -- TODO: Grep the post json to create the post list
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        [ Element.el [ centerX ] (Element.text "This blog serves for me to write my thoughts on various things")
        ]


blogPost : String -> Element msg
blogPost post =
    -- TODO: Grab the correct markdown file and run Markdown.toHtml https://package.elm-lang.org/packages/elm-explorations/markdown/latest/
    Element.column
        [ centerX, spacing Theme.siteTheme.contentSpacing ]
        []
