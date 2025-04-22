---
title: "Neovim Plugin for LLM with Aider Improved!"
description: "So... I spent more money... And learned a few more things... And I got an improved version of..."
pubDate: "Apr 21 2025"
heroImage: "/assets/blog/2025_04_21_Neovim_Plugin_for_LLM_by_Aider_Part_2/llmtoggle.png"
---

So... I spent more money... And learned a few more things...

And I got an improved version of [llm-nvim](https://github.com/julwrites/llm-nvim)!

In fact, I'm proud enough of this that I submitted it to the Awesome Neovim repository for listing. No matter that Aider wrote it - a useful tool is still a useful tool, right? - or that it's just a wrapper around [llm](https://github.com/simonw/llm) - there's plenty of other Neovim plugins which are basically nice wrappers - but I just felt like it was really getting somewhere and wanted to put it out there. I don't know if it will be accepted, but I do hope so. 

## llm-nvim Improved

(I'm also taking this chance to see if .mov files will show up in the blog)

So here's some changes I made: 

I restructured the code so that I have a bunch of manager windows, one for each major functionality. These all sit in a Unified Window, which lets the user swap back and forth without having to keep triggering commands. 

I also went ahead and broke up all the utilities and configuration and styles into their own common files for better code reuse. This helped a lot with how Aider handled the code later too.

<video src="/assets/blog/2025_04_21_Neovim_Plugin_for_LLM_by_Aider_Part_2/llm-nvim-models-plugins-keys.mov" controls></video>

The first version last week was able to manage models, plugins and keys. The new one can also do this, but perhaps a bit more consistently. I did manage to add aliases, and also some validation checks (e.g. if you try to set a model to default which has no API Key or enabling plugin, it will tell you)

These were the simpler functionalities; in general it was not so complex to set or remove these, since each entry was basically a line with only a few possible actions, and each entry could be kind of taken in isolation. 

The really complicated ones were the Fragments, Schemas and Templates. 

<video src="/assets/blog/2025_04_21_Neovim_Plugin_for_LLM_by_Aider_Part_2/llm-nvim-fragments.mov" controls></video>

Fragments are a big one. In fact, this is the one that I had the most trouble with, because there's so many things involved in it. A fragment could be a file or a URL, it could have an alias or multiple aliases, it could be used individually or together with other fragments or selections... 

It also doesn't help that fragments are only found in the llm logs, and not in a file, which made the UI a bit messier. I added a toggle for this, to hide all the fragments without an alias, which helped. 

Nonetheless, now llm-nvim is able to add new fragments from disk or from github, and use these flexibly in a prompt.

<video src="/assets/blog/2025_04_21_Neovim_Plugin_for_LLM_by_Aider_Part_2/llm-nvim-schemas.mov" controls></video>

Schemas were another really messy one. Probably on purpose, there are 5 ways to specify a schema, and I was trying to handle.. most of them, and make them human-readable. 

So I had to figure out how to specify a schema in a JSON or DSL, and correctly save it (the correct saving and passing it around between Lua, Shell and .json was hard to coordinate through a LLM). I then added aliases by adding a `schemas.json` to the llm directory. 

The other thing which tripped me up is that I forgot not all models can return a structured response. So when I was testing it, I kept running up against this when trying it with Gemini, and only realized after several 'bug fixing' prompts that I was just using the wrong model.

<video src="/assets/blog/2025_04_21_Neovim_Plugin_for_LLM_by_Aider_Part_2/llm-nvim-templates.mov" controls></video>

Templates were - despite the complexity that they can encapsulate - the easiest to implement. Partly because they are stored in a json, and so I could just directly read-write that json, and partly because it could be broken into steps where everything was kind of a choice for the user (e.g. whether to use a schema, or a fragment, etc...)

## What I learned about using LLMs

The usual lessons still apply:

- Reducing context helps the LLM to focus
- What you are vague about, the LLM can be creative with
- Helping the LLM to break down the task helps to get it done

Some new ones:

1. It can often be cheaper (and faster and easier) to go in and make a small change by yourself. I found myself often asking the LLM to remove things multiple times just to realize that I could have removed that with a couple of lines change.

2. Surprisingly many syntax errors occur because of either rate limiting or edit mismatch. Both Gemini 2.5 Pro and Claude Sonnet 3.7 - the top of the line - would fail in returning the correct search or edit format, and this would throw Aider for a bit, and often end up with a misplaced character or bracket or `end`, which in turn would break the plugin.

3. LLMs still have a knowledge cutoff. This applies a lot especially when you are working without a specific version of packages in mind; they may not know that those packages have changed, or have removed or renamed or moved functionality. 

Overall I don't think I spent exorbitantly (I won't be splurging like that again so soon though), considering what I was able to achieve in the amount of time I spent. In less than a week I was able to go from no plugin to a full-featured, pretty decentlyy documented plugin, which I think I can maintain with very minimal assistance from a LLM. 
