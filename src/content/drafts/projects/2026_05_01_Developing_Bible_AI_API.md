---
title: "Developing Bible AI API"
description: "Splitting the monolith after 10 years of ScriptureBot."
pubDate: "May 01 2026"
tags: ["Golang", "Cloud Run", "LLM", "Bible"]
---

Ten years ago, I wrote **ScriptureBot**. It was a simple idea: a Telegram bot to help people access the Bible more easily. It scraped web pages, parsed text, and spat out verses. It worked, people used it, and for a long time, that was enough.

But as with all side projects that survive a decade, it accumulated... character. And by character, I mean tech debt.

![ScriptureBot Old Architecture](/assets/blog/2026_05_01_Developing_Bible_AI_API/old_arch.png)

With the recent explosion of LLMs, I saw an opportunity to finally upgrade the experience. Not just "get me John 3:16," but "explain the context of John 3:16." It was obvious that the old ways of parsing and hardcoding logic were not going to scale with the nuance I wanted.

## The Great Split

To do this right, I realized I needed to stop building a *bot* and start building a *platform*. ScriptureBot shouldn't be doing the heavy lifting of scraping and AI inference. It should just be a UI.

Enter the **Bible AI API**.

![Bible AI API Microservice Approach](/assets/blog/2026_05_01_Developing_Bible_AI_API/new_arch.png)

I decided to spin out the core logic into a dedicated, stateless microservice. This API would serve as the brain for ScriptureBot, but also for any future tools I built, like the Discipleship Journal. As a maker, you eventually learn that coupling your logic to your UI is a trap. Sometimes it takes ten years to truly learn it.

## The Stack (Overkill?)

I might be over-engineering this, but that's half the fun. When it’s your project, you get to choose the tools that spark joy or at least curiosity.
*   **Go:** Because I wanted strong typing and performance.
*   **Cloud Run:** For serverless scalability. And, crucially, for $0 idle costs.
*   **Stateless Architecture:** No databases in the API layer. All context is passed in the request.

## The AI Layer

The real magic is the new LLM integration. I built a modular client that wraps OpenAI, Gemini, and DeepSeek. It’s designed to be resilient—if one provider goes down (or I run out of credits), it seamlessly fails over to the next.

![LLM Failover Architecture Demo](/assets/blog/2026_05_01_Developing_Bible_AI_API/llm_failover.png)

It feels a bit ambitious for a Sunday project, but after 10 years, maybe it's time to build something that lasts another 10. The AI era changes everything about how we interact with text—what better text to build upon than the one that has lasted through millennia?
