module Blog exposing (Post, contents)


contents =
    [ Post
        "2021_11_03_GLS_2021"
        "03 November 2021"
        "GLS 2021"
        "I had recently attended GLS 2021, and decided I should put notes up"
    ]


type alias Post =
    { id : String
    , date : String
    , title : String
    , desc : String
    }
