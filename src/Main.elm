module Main exposing (..)

import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Url
import Element exposing (..)
import Element.Font as Font
import Element.Border as Border
import Element.Background as Background

-- MAIN


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



-- MODEL


type alias Model =
  { key : Nav.Key
  , url : Url.Url
  }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
  ( Model key url, Cmd.none )



-- UPDATE


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



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
  Sub.none


-- THEME

type alias Theme =
    { borderColor : Element.Color
    , backgroundColor : Element.Color
    , fontColor : Element.Color
    , disabledFontColor : Element.Color
    , fontFamily : List Font.Font
    , padding : Int
    , menuSpacing : Int
    , footerSpacing : Int
    , contentSpacing : Int
    }


siteTheme : Theme
siteTheme =
    { borderColor = rgb255 0 0 0
    , backgroundColor = rgb255 34 44 60
    , fontColor = rgb255 255 255 255
    , disabledFontColor = rgb255 128 128 128

    -- , fontFamily = [ Font.external { name = "The Girl Next Door", url = "https://fonts.googleapis.com/css2?family=The+Girl+Next+Door&display=swap" }, Font.sansSerif ]
    -- , fontFamily = [ Font.external { name = "Indie Flower", url = "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" }, Font.sansSerif ]
    -- , fontFamily = [ Font.external { name = "Fuzzy Bubbles", url = "https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap" }, Font.sansSerif ]
    , fontFamily = [ Font.external { name = "Fira Sans", url = "https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" }, Font.sansSerif ]
    , padding = 30
    , menuSpacing = 5
    , footerSpacing = 30
    , contentSpacing = 30
    }


-- VIEW

view : Model -> Browser.Document Msg
view model =
  { title = "tehj.io"
  , body = [
      Element.layout
        [ Background.color siteTheme.backgroundColor
        , Font.color siteTheme.fontColor
        , Font.family siteTheme.fontFamily
        , Element.padding siteTheme.padding
        -- , Element.width (Element.fill |> Element.maximum model.window.width)
        ]
        dom
      ]
  }


dom : Element Msg
dom =
  Element.column
    [ Element.spacing siteTheme.contentSpacing
    , Element.centerX
    ]
    [ header
    , body
    ]

body : Element Msg
body =
  Element.column
    [ Element.spacing siteTheme.contentSpacing
    , Element.centerX
    ]
    [ intro
    , projectListing
    ]

header : Element msg
header =
  Element.row
    [ Element.spacing siteTheme.footerSpacing 
    , Element.centerX
    ]
    [ iconLink [] 
      { url = "https://github.com/julwrites"
      , src = "../public/assets/images/dark/github.png"
      , description = "Github" }
    , iconLink [] 
      { url = "https://linkedin.com/in/julwrites"
      , src = "../public/assets/images/dark/linkedin.png"
      , description = "LinkedIn" }
    , iconLink [] 
      { url = "https://tehj.io/blog"
      , src = "../public/assets/images/dark/blog.png"
      , description = "Blog" }
      -- , Element.download []
      --     { url = "../public/assets/resume/Resume_Julian_Teh.pdf"
      --     , label = View.iconLink [] { url = "../public/assets/resume/Resume_Julian_Teh.pdf", src = "../public/assets/images/dark/download.png", description = "Resume" }
      --     }
    ]

intro : Element Msg
intro =
  Element.column
  [ Element.spacing siteTheme.contentSpacing
  , Element.padding 10
  , Element.centerX
  , Border.color siteTheme.disabledFontColor
  , Border.width 1 ]
  [ Element.el 
    [  Font.size 40
    , Font.medium 
    , Element.centerX
    ] 
    ( Element.text "Hi, I'm Julian" )
  , Element.image 
    [ Element.width (Element.fill |> Element.maximum 256)
    , Element.centerX 
    ] 
    { src = "../public/assets/images/photos/2.jpg"
    , description = "Photo of me" }
  , Element.el 
    [ Font.size 25 
    , Element.centerX
    ] 
    ( Element.text "Welcome to my domain" )
  ]


projectListing : Element msg
projectListing =
    Element.column
        [ Element.spacing siteTheme.contentSpacing
        , Element.centerX 
        ]
        [ Element.el 
          [ Element.centerX
          , Font.size 30
          , Font.medium 
          ] 
          (Element.text "Stuff I did for fun")
        , Element.column 
          [ Element.centerX
          , Element.spacing 50 
          ]
          [ thumbnailLink [] { url = "https://github.com/julwrites/vscodecmder", src = "../public/assets/images/projects/vscodecmder.jpg", description = "VSCodeCmder" }
          , thumbnailLink [] { url = "https://github.com/julwrites/ScriptureBot", src = "../public/assets/images/projects/scripturebot.png", description = "ScriptureBot" }
          ]
        , Element.el 
            [ Element.centerX
            , Font.size 30
            , Font.medium 
            ] 
            (Element.text "Stuff I did in DigiPen")
        , Element.column 
            [ Element.centerX
            , Element.spacing 50 ]
            [ thumbnailLink [] { url = "http://games.digipen.edu/games/bibbb", src = "../public/assets/images/projects/BIBBB_1.jpg", description = "BIBBB" }
            , thumbnailLink [] { url = "http://games.digipen.edu/games/flowline", src = "../public/assets/images/projects/Flowline_1.jpg", description = "Flowline" }
            , thumbnailLink [] { url = "http://games.digipen.edu/games/shortcircuit", src = "../public/assets/images/projects/ShortCircuit_1.jpg", description = "Short Circuit" }
            ]
        ]


thumbnailLink : List (Element.Attribute msg) -> { url : String, src : String, description : String } -> Element msg
thumbnailLink attrs def =
    Element.link
        (Element.paddingXY 32 0
            :: attrs
        )
        { url = def.url, label = Element.image [ Element.height (Element.px 128) ] { src = def.src, description = def.description } }


-- COMPONENTS

iconLink : List (Element.Attribute msg) -> { url : String, src : String, description : String } -> Element msg
iconLink attrs def =
  Element.link attrs
  { url = def.url
  , label = Element.image 
    [ Element.width (Element.px 33)
    , Element.height (Element.px 33) 
    ] 
    { src = def.src
    , description = def.description 
    } }

