---
title: "Developing Discipleship Journal"
description: "Revisiting the basics of spiritual growth with modern tools."
pubDate: "Apr 03 2026"
tags: ["React", "PWA", "Firebase", "PostgreSQL"]
---

I’ve been involved in discipleship and ministry for years. And in that time, I’ve seen a lot of tools, and even built some myself. I confess, most of these tools are not useful in my experience. 

But I'm a maker at heart, so this is just a challenge rather than a hopeless endeavor. 

When I really thought about what tools disciples and disciple-makers *really* need, and thought through my own experience, I felt convinced that complex tools just would not work. We needed something simple, yet infinitely extensible. 

There are probably many possible things we can do, but the one that I thought would be most applicable was simply a journal. 

A place to write down what you're learning, what you're struggling with, and what you're praying for. A way to engage the Scripture right in that place. And even better, a way to share that with a mentor or a small group.

## Why a New App?

I know, "another journaling app.". I wonder why, but I have not actually seen such an app, so maybe I'm just not checking the market. Or maybe I just want to make something and don't really care if it's useful to anyone else. Who knows. 

But I felt there was an opportunity here to build something interesting, and learn how to better use AI-assisted coding - now called AI Engineering, I hear - to do so. 

In fact, since I already had portions of this built in the backend, I had the extra opportunity to work on more infrastructure stuff, like migrating user data, re-launching my telegram bot on a different dev account, creating a small microservice architecture, and so on. 

## What's the pitch?

A core skill in discipleship is journaling. Some will have heard that writing helps you improve your thinking; the same is true of growing about growing in faith. Whether it is part of your daily devotions/meditations, or a journal of what you are learning, or taking notes for Bible study, we all start with some kind of journal.

Now, imagine writing a journal entry, highlighting a verse, doing a Bible study... and being able to pull a passage that you need into your journal. And then imagine being able to ask about it, get context, cross-references, or historical background—without you ever leaving your journal. And all this will forever be available to you. Like a regular journal, just... with more things available. 

This is not necesarily what I think everyone wants, but I think it is something that would enhance the thing that everyone needs to do. 

I know this is usually approached as a matter of adding journaling to a Bible app, but I think that's the wrong way to approach it; a good christian may start from the Bible, but most christians - and most christians are the ones who struggle with discipleship - start without the Bible. We need a way to bring the Bible in.

## The Tech Stack

I decided to build this as a **Progressive Web App (PWA)** because I want it to be accessible everywhere, even offline.
*   **Frontend:** React + Vite
*   **Backend:** Go + PostgreSQL
*   **Auth:** Firebase

Since this also involves retrieving bible passages, and I've had a long-standing telegram bot for that, I decided to reuse some of that logic by refactoring it into a separate service, so that both my bot and this new PWA could use the same backend. This also allows them to share base features, while specializing for their own interfaces. 

I later moved the database to TiDB after Cloud SQL burned through an entire $300 of free credits, and then some. I'm willing to pay for usage if there is usage, but I'd like to be able to avoid unnecessary costs before anyone has even started using it. 

## Fun fact

I actually did very little for this project; in fact a large amount of the work was done by [Google Jules](https://jules.google/), and in fact this is one of the things that convinced me to buy a Google AI Pro subscription. What it couldn't solve, I brought to my bastardized version of Claude Code (which runs DeepSeek), or later to Antigravity (which also has Claude models), to resolve with a tighter hand. 

## Next steps

I'm trying to follow my own advice to others, and focus on a MVP first. After the MVP is done, then we add more features based on feedback and discussion with others who are doing disciple-making. 

So the next steps would be to add some features; bible reading plans, memory verses, social features, and then look at improving the core features in another round; e.g. adding the ability to comment inline, or to run AI on only a section and add a comment, etc... 