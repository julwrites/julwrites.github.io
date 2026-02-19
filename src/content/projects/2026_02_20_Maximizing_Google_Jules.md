---
title: "Maximizing Google Jules"
description: "Google Jules is my new hammer, everything is my new nail"
pubDate: "2026-02-20"
tags: ["AI", "Google Jules", "Automation", "Engineering"]
heroImage: "/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_new_session.png"
---

Mid last year, I signed up to beta test [Google Jules](https://blog.google/technology/ai/google-gemini-jules-autonomous-agent/). At the end of this beta, Google very kindly offered me 3 months of Google AI Pro free, which included higher limits for Jules, Gemini, and some other AI tools like Whisk, Veo and NotebookLM. 

Perfect. I hadn't really finished experimenting with Google Jules, and I could see they were actively improving it, so 3 more months gave me a good runway to try things, and see how far I could maximize usage of Jules. This would also decide if it was worth it for me to subscribe to Google AI Pro; more Gemini and some other AI capabilities is nice, but really not life-changing. Autonomous task agent? Maybe there was something here. 

## A quick house tour

![Jules Session Option](/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_session_options.png)

Before we get into it, a quick tour of Jules. Jules is essentially a sandbox that can run AI which you can instruct, and it has incrementally been outfitted with a couple of nice features. (During the beta, it was really bare bones; you had the session options, the chat, and you could create a branch on GitHub; that was it. Superb MVP discipline, if I may say so).

It has internet access, can pull your GitHub repository on launching the task, and can do some searches. And it can create a branch or a PR on GitHub after it finishes the task. 

![Jules Environment](/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_environment.png)

Perhaps more interestingly, you can set up specific environments for Jules to work in. For example, you can install Neovim; I got it to do this with llm-nvim, just so it could close the loop.

![Jules MCP](/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_mcp.png)

There's a couple of MCPs too, and some other plugins which are slowly being populated. Context7 is a nice one for code context. 

![Jules CI Fixer](/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_cifixer.png)

This one was quite new, and honestly one of the best new additions. Jules doesn't always get the task right the first time, and your CI/CD is there to catch it. For a while I was going back and forth between GitHub and Jules to prompt it to fix linting, tests, etc... 

Now they've integrated this check into Jules, the rate of successful PRs is way higher. (It also burned through my GitHub Actions limit on my private repositories, but that's another story)

## Jules was a new paradigm

Now, I know Codex (And Devin?) is kind of like this too. Jules is just one of the players on this field. Supposedly, Codex is better for coding; I really haven't tried Codex very much. I've used Claude Code a whole lot, and I've experimented with most of the top models, but it's hard to gauge how well a model will do on an arbitrary codebase and even an arbitrary task. 

What tilted the scale here was that Jules was free to use. Talk about lowering the bar to entry, right? 

By this point, I had been using AI for work, and I had built a bunch of things with AI already, like [Cash-Register](https://tehj.io/projects/2024_08_11_ai_built_expense_tracker/) and [LLM-Nvim](https://tehj.io/projects/2025_04_15_neovim_plugin_for_llm_by_aider/) and an [NFC Tag App](https://tehj.io/projects/2025_10_28_nfc_tag_app/). Suffice to say, I knew what AI could do, and I was looking for what it could do without my constant supervision. 

This is what I mean by Jules was a new paradigm. Sure, all those other projects probably would have taken me much longer to do without AI, but I was still the one doing the work. I was bound by my computer, so to speak; if I wasn't at my computer, it didn't really matter how much I was willing to spend in AI tokens, I couldn't do anything to make progress.

Jules made it possible to start interacting on tasks, and even getting them done, on my phone. This, it turns out, was a game-changer. And then y'know. Blah blah Hammer, blah blah Nail. 

Within just months, I was able to build a bunch of things with Jules:

- [Discipleship Journal](https://github.com/julwrites/discipleship-journal): A new project which I conceived from discussion with my mentor. Built from scratch with about 90% of the code written by Jules. I handled the deployment (8%) and pulled in [Claude Code](https://claude.ai/code) with [Deepseek](https://deepseek.com/) for the 2% where Jules hit a wall.
- [BibleAI API](https://github.com/julwrites/BibleAIAPI): Along with doing the Discipleship Journal, I thought it appropriate to decouple commonly used functionality from [ScriptureBot](https://github.com/julwrites/scripturebot), and migrate this over to a new GCP account for billing. This wasn't super big, but I had to do some manual testing to make sure the API was to my liking. Otherwise, 80% of the code was done by Jules.
- [Agent-Harness](https://github.com/julwrites/agent-harness): was another little thing I thought of when I was bootstrapping yet another AI-assisted project, and thought... why can't this be more repeatable?
- [WebWiki](https://github.com/julwrites/webwiki): I've been a Vimwiki user for years, but the problem has always been using it on mobile or on my work device. So why not make a way to access it?

I'll write more about some of these projects in the future too; I think they're pretty interesting. 

## The tipping point

The tipping point came from watching a friend build a geopolitical tracker using Claude Code. It was an interesting approach, kind of like OpenClaw but really really specialized. I wondered if I could get Jules to replicate what he was doing with $150/month, for a fraction of the cost. 

It turns out, it is kind of possible. I was able to get somewhere close with some effort and a lot of trial and error. It's a good thing I have 100 tasks a day. 

![Jules Scheduled Task](/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_scheduled_task.png)

It turns out, I can also schedule tasks. Now, this was a new kind of problem. It's no use scheduling lots of tasks if the end result is a bunch of PRs that I need to manually merge; that would just be merge hell. 

So, for this particular repository, I set up a system where Jules runs on an hourly schedule, and I explicitly ignored the warnings from every AI I talked to about this. 

![Jules Auto Merge](/assets/blog/2026_02_20_Maximizing_Google_Jules/jules_github_auto_merge.png)

This closed the loop almost perfectly. There were other problems after that, like Jules being 'poisoned' by past instruction and then deviating from the prompt I gave it, but that's another story. I now could consistently spend 24 tasks a day, and without needing to monitor it all day.

Now, this was a new paradigm. I could now effectively 'outsource' a kind of indefinite task to Jules, and just let it run. 

## Jules is still just one paradigm

I'm aware that the whole world is experimenting with AI constantly now. The pace is really breakneck, and it's hard to keep up. I'm sure there's a lot out there that I haven't tried, and little ol' family guy me with a full time job is only able to scratch the surface. 

Still, it's pretty cool to have explored one paradigm to this depth, and I'm really excited to see what else I can do with this, or with other paradigms that AI unlocks.  