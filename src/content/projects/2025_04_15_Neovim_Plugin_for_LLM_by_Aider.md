---
title: "Neovim Plugin for LLM with Aider"
description: "I've been wanting to make a Neovim plugin for some time, and recently came across a simple-enough use case that I thought I could try..."
pubDate: "Apr 15 2025"
heroImage: "/assets/blog/2025_04_15_Neovim_Plugin_for_LLM_by_Aider/llm-nvim-packer.png"
---

Perhaps this is just validating what I keep reading; that LLMs are lowering the bar to entry for software development, that they will make software easier to write - and therefore more software developers will be needed - and that experienced engineers benefit disproportionately from having access to a capable LLM. 

I don't consider myself near the top percentile of software developers, but I can see why this is the case as I continue to experiment with LLMs.

By now, I've used LLMs very heavily for a few of my own projects (and a few at work too). Some of [them](https://github.com/julwrites/ai-gateway-portal) end up going unused, and really serve more as a learning experience than anything else. [Others](https://github.com/julwrites/cash-register) have become part of my daily app usage, and [yet others](https://github.com/julwrites/julwrites.github.io) just showed that perhaps cleaning up tech debt is now possible after all. 

But having this tool - and being willing to spend some cash - seems sufficient to get me over the inertia of starting on something.

## Neovim plugins

I've been a Neovim user for some time now, and part of that identity seems to be a desire to contribute to the ecosystem. Of course, one such way is to contribute a plugin; there are many plugins which make my Neovim experience valuable, and I would hope that I can make others' experience valuable through something I write. 

So recently when I came across some AI tools, and I started wondering if I could have these tools in my Neovim configuration, I found that [llm](https://github.com/simonw/llm) didn't really have an available plugin. Maybe it's just hard to find, but none of the searches I did brought up a plugin that adequately covered my use cases. 

This was a bit unusual. It's rare to find a use case in the community which someone hasn't at least attempted to solve. But since I didn't find any, I thought... maybe I can do it myself. 

## Aider strikes again

So I created a new repository, and threw the task to Aider to create a Neovim plugin that would integrate `llm` commands with Neovim. It did really well; after a few stumbles here and there, I was able to get a working skeleton up and running. Immediately after, I got it to start writing tests, and dogfooded the plugin myself to see how it felt like. 

About 30 minutes later, I had a working [llm-nvim](https://github.com/julwrites/llm-nvim) plugin, which could chat with a LLM through the `llm` tool. This was nice, and then I thought, why not go further?

![llm-nvim-chat](/assets/blog/2025_04_15_Neovim_Plugin_for_LLM_by_Aider/llm-nvim-packer.png)

2 hours in, I had a couple more things. 

It started with wanting to select a model...

![llm-nvim-select-model](/assets/blog/2025_04_15_Neovim_Plugin_for_LLM_by_Aider/llm-nvim-select-model.png)

Then I started thinking about installing plugins...

![llm-nvim-plugins](/assets/blog/2025_04_15_Neovim_Plugin_for_LLM_by_Aider/llm-nvim-plugins.png)

Then managing keys...

![llm-nvim-keys](/assets/blog/2025_04_15_Neovim_Plugin_for_LLM_by_Aider/llm-nvim-keys.png)

It's on my roadmap now to support fragments, templates, schemas, embeddings, and aliases, which I expect will come... soon? There's a long weekend coming up, so I think I can do it then. 

## Thoughts on AI development

It's been interesting, getting a Neovim plugin out this way. It's been a suspicion of mine for the last year that AI would increase the amount of variation in the open source market. It is not as easy for a corporation to do something without legal implications, but an individual now has the capability of a small consultancy with a fraction of the cost. This means someone with an idea, and a decent problem-solving background, can spend coffee money to make that idea come to life. 

Will that idea make money? I think it depends on the person. A sufficiently experienced Software Engineer will probably be able to make something quite useful, well-engineered and maybe turn a profit. But remember, the rest of the market is going to explode in the same way, and it might cost someone else just as little to make their own, completely customized solution. 

In this sense, I do think Open Source software will get massively better, while Closed Source platforms continue to gain the benefit of hosting such software. As usual, the businesses that are able to leverage their unique capabilities or resources to strategically build valuable solutions, will win. But now, they have to re-evaluate how much of their moat is being eroded by these two pieces. 
