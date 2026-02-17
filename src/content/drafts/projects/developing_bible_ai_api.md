---
title: "Developing Bible AI API"
description: "Splitting the monolith after 10 years of ScriptureBot."
pubDate: "2026-02-16"
tags: ["Golang", "Cloud Run", "LLM", "Bible"]
---

Ten years ago, I wrote **ScriptureBot**. It was a simple idea: a Telegram bot to help people access the Bible more easily. It scraped web pages, parsed text, and spat out verses. It worked, people used it, and for a long time, that was enough.

But as with all side projects that survive a decade, it accumulated... character. And by character, I mean tech debt.

With the recent explosion of LLMs, I saw an opportunity to finally upgrade the experience. Not just "get me John 3:16," but "explain the context of John 3:16."

## The Great Split

To do this right, I realized I needed to stop building a *bot* and start building a *platform*. ScriptureBot shouldn't be doing the heavy lifting of scraping and AI inference. It should just be a UI.

Enter the **Bible AI API**.

I decided to spin out the core logic into a dedicated, stateless microservice. This API would serve as the brain for ScriptureBot, but also for any future tools I built (like the Discipleship Journal).

## The Stack (Overkill?)

I might be over-engineering this, but that's half the fun.
*   **Go:** Because I wanted strong typing and performance.
*   **Cloud Run:** For serverless scalability (and $0 idle costs).
*   **Stateless Architecture:** No databases in the API layer. All context is passed in the request.

## The AI Layer

The real magic is the new LLM integration. I built a modular client that wraps OpenAI, Gemini, and DeepSeek. It’s designed to be resilient—if one provider goes down (or I run out of credits), it seamlessly fails over to the next.

It feels a bit ambitious for a Sunday project, but after 10 years, maybe it's time to build something that lasts another 10.
