---
title: "The Scaffolding of Autonomy"
description: "Why I built Agent-Harness to give my AI agents a persistent brain and data locality."
pubDate: "May 29 2026"
---

Not so long ago, my primary interaction with AI was through a chatbox. It was fun, novel, and great for one-off scripts, but as soon as I tried to point it at a real project, things started to get wonky. I’d start a new session, the agent would "look around," and within an hour it would be lost in the weeds—forgetting architectural decisions I’d made ten prompts ago or hallucinating files that didn't exist.

I realized that if I wanted an agent to act like a partner, I couldn't just give it a better prompt. I had to give it a **harness**.

That was the start of **[Agent-Harness](https://github.com/julwrites/agent-harness)**.

## The Motivation: Beads, Gastown, and Locality

I was originally inspired by Steve Yegge's work on **Beads** and **Gastown**, but I wanted something that was portable. I wanted a system that could be adopted and adapted into *any* repository, regardless of the model provider or the type of interaction—be it a one-off task or a long-running agent session.

The core of my hunch was that in an LLM-driven world, **data locality and accessibility matter**. 

If your agent fails every time an external API goes down, or if it has to reach out to a centralized knowledge base that might drift from the code, that’s a massive structural risk. I wanted to build the knowledge base *within* the repository itself. If the AI can read everything it needs locally, the friction of "onboarding" a new agent session drops to near zero.

## Solving Real Pain Points

The evolution of the harness was driven by actual scars. I grew tired of watching an agent read the wrong file for the third time in a row, or completely losing the thread of what happened in the last session. 

But the biggest hurdle I wanted to clear was **asynchronicity**. 

In a standard chat-based workflow, everything is linear. But development doesn't scale that way. I wanted to be able to make tasks asynchronous—letting agents work on different branches or different parts of the stack without tripping over each other. 

This became the absolute lifeline for building the **[Discipleship Journal](https://github.com/julwrites/discipleship-journal)**. I used Jules to develop 90% of that project from scratch, and without the harness providing those asynchronous rails and local "situational awareness," Jules would have been lost every single iteration.

## What the Harness Actually Does

The harness provides a few key "rails" that I now bake into every repo:

1.  **The Task System**: We moved away from vague conversations to a strict `docs/tasks/` folder. Using `scripts/tasks.py next`, the agent can autonomously find its next priority and keep its own state.
2.  **Long-term Memory**: A curated `docs/memories/` directory ensures the "why" behind a decision is stored right next to the code.
3.  **The Quality Gate**: I eventually added a "Quality Skill" to the harness. Now, an agent has to run `quality verify` and prove the tests pass locally before I even look at the PR.

## From Bootstrapping to Standardization

What started as a simple set of scripts for bootstrapping has evolved into the first thing I install in any new project. Whether it’s splitting out the **[BibleAI API](https://github.com/julwrites/BibleAIAPI)** or building a new tool like **[WebWiki](https://github.com/julwrites/webwiki)**, the harness ensures that the repository builds up its own "intellectual capital" over time.

It’s the difference between "chatting with an AI" and actually **engineering with an agent**.

By the time I handle the manual deployment or bring in [Claude Code](https://claude.ai/code) for a final polish, the repository is already in a state of high order. The harness didn't just save me time; it saved the project's soul from the entropy of a thousand autonomous iterations.

![The Harness Structure](/assets/blog/2026_05_29_Autonomy_Needs_Guidance/harness_structure.png)

