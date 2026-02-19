---
title: "Maximizing Jules"
description: "Throwing tasks at the wall: How Google Jules changed my project paradigm from speed to stamina."
pubDate: "2026-02-19"
tags: ["AI", "Google Jules", "Automation", "Engineering"]
heroImage: "/assets/blog/2026_02_19_Maxing_Google_Jules/jules_new_session.png"
---

Late last year, I signed up to beta test [Google Jules](https://blog.google/technology/ai/google-gemini-jules-autonomous-agent/), which came with a three-month "all-access pass" to Google AI Pro. It was the perfect playground for an engineer: a high-powered autonomous agent and three months to see exactly what would happen if I let it drive.

What I found wasn't necessarily a speed boost, but a total shift in how I approach project architecture—a paradigm I've come to think of as "throwing tasks at the wall to see what sticks."

## The Experiment Log: Breadth over Speed

The common narrative for AI is that it makes you faster. In my experience with Jules, that’s not quite right. In fact, some of these projects took *more* effort than doing them manually because I was managing the agent's output. 

But Jules gave me something I didn't have before: **Stamina.** 

I was able to explore an incredible breadth of projects concurrently that would have been mentally exhausting otherwise:

*   **[Discipleship Journal](https://github.com/julwrites/discipleship-journal)**: Built this from scratch with about 90% of the effort handled by Jules. I handled the deployment (8%) and pulled in [Claude Code](https://claude.ai/code) for a final 2% of polish where Jules hit a wall.
*   **[BibleAI API](https://github.com/julwrites/BibleAIAPI)**: I tasked Jules with the heavy lifting of decoupling this from [ScriptureBot](https://github.com/julwrites/scripturebot). About 80% of the code restructuring was done autonomously.
*   **[Agent-Harness](https://github.com/julwrites/agent-harness)** and **[WebWiki](https://github.com/julwrites/webwiki)**: Developed these tools from the ground up to standardize how I manage agents and personal data.

Jules didn't make me a "10x coder" in terms of minutes saved per line, but it allowed me to maintain ten different "fronts" of development at once.

## The "Hammer and Nails" Moment

The turning point came from watching a friend build a geopolitical tracker using Claude Code. It was an interesting approach, and I wondered if I could apply that same logic to Jules. (The old adage: when you have a powerful enough hammer, everything starts looking like a nail.)

If Jules could handle a complex code migration, could it handle a complex *information* migration?

![Jules Scheduled Task](/assets/blog/2026_02_19_Maxing_Google_Jules/jules_scheduled_task.png)

## Closing the Loop: Autonomous GitHub Schedules

The real "Maximizing Pro" move wasn't a single prompt, but a monthly engineering effort to build a closed loop. I wanted Jules to live where the work lives—in GitHub.

After a month of trial and error, I managed to set up a system where Jules runs on an hourly schedule. It's not just "chatting"; it's incrementally developing and updating my **[Jules-Analysis](https://github.com/julwrites/jules-analysis)** repository. 

As long as the instructions are clear enough to prevent "model drift," it acts as a self-sustaining geopolitical tracker that builds itself while I sleep.

## Conclusion: A New Home on the Frontier

Jules has moved me past the era of "AI as a chatbox." It’s now a scheduled, autonomous worker that enables a volume of experimentation I couldn't have sustained on my own. 

The frontier of autonomous agents doesn't just feel like a science experiment anymore. It’s starting to feel like home.
