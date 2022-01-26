module Blog exposing (Post, contents)


contents =
    [ Post
        "2020_08_16_Code_Server"
        "18 August 2020"
        "Internet and storage for my code-server"
        "I had to do some extra steps to get storage attached and internet enabled for my code-server docker instance"
    , Post
        "2020_08_16_Nginx_Server"
        "16 August 2020"
        "Setting up Nginx Reverse Proxy to Custom Domain"
        "Now that Code Server was up, I wanted to be able to access it from anywhere, so I used nginx to enable access from my custom domain"
    , Post
        "2020_08_15_Code_Server"
        "15 August 2020"
        "Setting up Code Server on Fedora Server"
        "After setting up Fedora Server once, I found that it was insufficient for running Code Server, so I had to re-do my installation with a couple of different steps"
    , Post
        "2020_08_07_Fedora_Server"
        "07 August 2020"
        "Setting up a Fedora Server"
        "I received back an old laptop from a mentee recently (he had gotten his own laptop) and decided that this would be a good opportunity to try my hand at some Linux Server administration"
    , Post
        "2020_06_19_Golang_Bot"
        "19 June 2020"
        "Re-writing my Telegram Bot in Golang"
        "I had originally written a Telegram Bot in Python 2, but seeing as Python 2 was sunsetted, I decided to re-write it in Golang as a way to learn the language"
    , Post
        "2020_04_26_Markdown_Blog"
        "26 April 2020"
        "Adding a Markdown blog to my Vue + TS site"
        "I wanted to add a static, markdown-based blog component to my site, just for me to do write-ups on things I think are interesting enough for me to want to consolidate my knowledge on them and keep them around (not just in my head)."
    ]


type alias Post =
    { id : String
    , date : String
    , title : String
    , desc : String
    }
