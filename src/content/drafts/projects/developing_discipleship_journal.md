---
title: "Developing Discipleship Journal"
description: "Revisiting the basics of spiritual growth with modern tools."
pubDate: "2026-02-16"
tags: ["React", "PWA", "Firebase", "PostgreSQL"]
---

I’ve been involved in discipleship and ministry for years. And in that time, I’ve seen a lot of tools come and go. Apps, platforms, social networks for Christians.

But when I really thought about what tools disciples and disciple-makers *actually* need, it wasn't a complex LMS or a "Facebook for Church." It was something much simpler: **A journal.**

A place to write down what you're learning, what you're struggling with, and what you're praying for. And crucially, a way to share that with a mentor or a small group.

## Why a New App?

I know, "another journaling app." But the key here is integration.

Since I was already rebuilding my Bible infrastructure (see [Developing Bible AI API](/projects/developing_bible_ai_api)), I realized I could build a journal that was *Bible-aware*.

Imagine writing a journal entry, highlighting a verse, and having an AI assistant (powered by my own API) instantly provide context, cross-references, or historical background—without you ever leaving the app.

## The Tech Stack

I decided to build this as a **Progressive Web App (PWA)** because I want it to be accessible everywhere, even offline.
*   **Frontend:** React + Vite (speed is life).
*   **Backend:** Go + PostgreSQL.
*   **Auth:** Firebase (because writing auth from scratch is a mistake I've made too many times).

## A Work in Progress

I'm still figuring this out. Is an "AI-assisted discipleship journal" actually useful, or just a gimmick? I'm not sure yet. But I'm building it to find out.

At the very least, I'll have a better place to keep my own notes.
