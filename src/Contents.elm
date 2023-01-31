module Contents exposing (contents)

import Blog exposing (Post)


contents =
    [ Post
        "2023_01_31_Fatherhood_Begins"
        "31 January 2023"
        "Fatherhood begins"
        "Yesterday my child was born"
        "/blog"
    , Post
        "2022_02_12_Flutter_Setup"
        "12 February 2022"
        "Setting up Flutter"
        "My wife and I had decided on Flutter for a project this year, and I was trying to set it up without Android Studio"
        "/projects"
    , Post
        "2022_02_02_Elm_Website"
        "02 February 2022"
        "Re-writing my website in Elm"
        "I had been interested in Functional Programming for awhile, and decided to re-write this website in Elm"
        "/projects"
    , Post
        "2022_01_17_Redox_Keyboard_Builds"
        "17 January 2022"
        "Building Redox Keyboards"
        "My wife wanted a split keyboard, so I took the chance to learn how to build one from scratch, and two more"
        "/projects"
    , Post
        "2022_01_07_Golang_Bot_Cloud_Run"
        "07 January 2022"
        "Migrating my Golang Bot to Cloud Run"
        "In an attempt to reduce expense and upgrade to newer technologies, I migrated my Golang bot to Google Cloud Run"
        "/projects"
    , Post
        "2021_11_03_GLS_2021"
        "03 November 2021"
        "GLS 2021"
        "I had recently attended GLS 2021, and decided I should put notes up"
        "/blog"
    , Post
        "2021_03_29_React_Website"
        "29 March 2021"
        "Next.js/Vercel with React/TS website for my Wedding"
        "With my wedding coming up, I wanted to take charge of my own wedding website"
        "/projects"
    , Post
        "2020_08_18_Code_Server_Extra"
        "18 August 2020"
        "Internet and storage for my code-server"
        "I had to do some extra steps to get storage attached and internet enabled for my code-server docker instance"
        "/projects"
    , Post
        "2020_08_16_Nginx_Server"
        "16 August 2020"
        "Setting up Nginx Reverse Proxy to Custom Domain"
        "Now that Code Server was up, I wanted to be able to access it from anywhere, so I used nginx to enable access from my custom domain"
        "/projects"
    , Post
        "2020_08_15_Code_Server"
        "15 August 2020"
        "Setting up Code Server on Fedora Server"
        "After setting up Fedora Server once, I found that it was insufficient for running Code Server, so I had to re-do my installation with a couple of different steps"
        "/projects"
    , Post
        "2020_08_07_Fedora_Server"
        "07 August 2020"
        "Setting up a Fedora Server"
        "I received back an old laptop from a mentee recently (he had gotten his own laptop) and decided that this would be a good opportunity to try my hand at some Linux Server administration"
        "/projects"
    , Post
        "2020_06_19_Golang_Bot"
        "19 June 2020"
        "Re-writing my Telegram Bot in Golang"
        "I had originally written a Telegram Bot in Python 2, but seeing as Python 2 was sunsetted, I decided to re-write it in Golang as a way to learn the language"
        "/projects"
    , Post
        "2020_04_26_Markdown_Blog"
        "26 April 2020"
        "Adding a Markdown blog to my Vue + TS site"
        "I wanted to add a static, markdown-based blog component to my site, just for me to do write-ups on things I think are interesting enough for me to want to consolidate my knowledge on them and keep them around (not just in my head)."
        "/projects"
    ]
