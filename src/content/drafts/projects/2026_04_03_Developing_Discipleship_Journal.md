---
title: "Developing Discipleship Journal"
description: "Revisiting the basics of spiritual growth with modern tools."
pubDate: "Apr 03 2026"
tags: ["React", "PWA", "Firebase", "PostgreSQL"]
---

I’ve been involved in discipleship and ministry for years. In that time, I’ve seen a lot of tools and even built some myself. I confess, most of these tools aren't particularly useful in my experience. 

But I'm a maker at heart, so I see this less as a hopeless endeavor and more as a design challenge. 

When I really thought about what disciples and disciple-makers *really* need—distilling it through my own experience—I realized that complex tools just don't work. We need something simple, yet infinitely extensible. 

Among the many possibilities, the one that stood out as most essential was simply a journal. 

A place to write down what you're learning, what you're struggling with, and what you're praying for. A way to engage Scripture directly in that context. And even better, a way to share those insights with a mentor or a small group.

## Why a New App?

I know, "another journaling app." I wonder if I'm just missing something in the market, or perhaps I just wanted to build something and didn't mind if it was only useful to me. 

Regardless, I felt there was an opportunity to build something focused and learn how to better utilize AI-assisted coding—now called AI Engineering—to bring it to life. 

Since I already had portions of the logic in my backend, this was also an opportunity to refine my infrastructure: migrating user data, re-launching my Telegram bot on a more stable developer account, and moving toward a modular microservice architecture.

## What's the pitch?

A core skill in discipleship is journaling. We often hear that writing improves thinking; the same is true for growing in faith. Whether it’s daily devotions, tracking lessons learned, or taking notes for Bible study, growth almost always begins with some form of journaling.

Imagine writing a journal entry, highlighting a thought, and being able to pull the exact Bible passage you need directly into your notes. Then, imagine being able to ask questions about it—requesting context, cross-references, or historical background—without ever leaving your journal. All of this remains permanently available to you. It's a traditional journal, but with a vastly expanded toolkit.

This isn't necessarily a tool everyone is looking for, but I believe it enhances the one thing everyone needs to do. 

Usually, the approach is to add journaling to a Bible app. I think that's backwards. A seasoned Christian might start with the Bible, but most people—especially those struggling with discipleship—start with their daily lives. We need a way to bring the Bible to where people already are.

## The Tech Stack

I decided to build this as a **Progressive Web App (PWA)** to ensure it’s accessible everywhere, even offline.
*   **Frontend:** React + Vite
*   **Backend:** Go + PostgreSQL
*   **Auth:** Firebase

Since this involves retrieving Bible passages, I refactored the logic from my long-standing Telegram bot into a standalone service. Now, both the bot and the PWA use the same backend, allowing them to share core features while specializing for their respective interfaces. 

I eventually moved the database to TiDB after Cloud SQL burned through $300 of free credits in record time. I’m happy to pay for scale, but I’d like to keep infrastructure costs lean before the user base actually arrives.

## Fun fact

I actually spent very little time on the "manual" coding for this project. A significant portion of the work was executed by [Google Jules](https://jules.google/), which was actually what convinced me to subscribe to Google AI Pro. What Jules couldn't solve, I brought to a customized version of Claude Code (running DeepSeek) or Antigravity for higher-precision refinements. 

## Next steps

I’m trying to follow my own advice and focus on a true MVP first. Once the core experience is solid, I'll add features based on feedback from fellow disciple-makers. 

The immediate roadmap includes Bible reading plans, memory verses, and basic social sharing. Eventually, I’d like to explore more granular interactions, like inline commenting or running AI analysis on specific text selections to generate deeper reflections.
