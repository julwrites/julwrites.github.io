---
title: "Consolidating my personal website with the help of Aider"
description: "I've been changing other parts of my online infrastructure set up, and this ended up making it harder to maintain two separate websites..."
pubDate: "Apr 14 2025"
heroImage: "/assets/blog/2025_04_14_Consolidating_Blog_with_Aider/Nvim-aider.png"
---

Over the last year, I've been making more and more changes to how I handle my online presence. This actually started with moving my domain name management to Cloudflare - I still purchase from NameCheap, but Cloudflare manages the domain - because I wanted to start using their Tunnels and Zero Trust features.

As a result, this broke my previous set up where `tehj.io/blog` was another hosted static page on Github Pages that I could redirect to, and this small inconvenience made it evident that I wanted something different. It wasn't urgent, just annoying. 

Of course, over the last year there has also been more and more attention on LLMs and especially LLMs in coding applications. While this may not be very so straightforwardly usable for corporations, it is very much so for individuals; being my own customer, my risk is fully borne by myself. 

I had used this for some other projects too, like my [Expense Tracker](https://tehj.io/blog/projects/2024_08_11_AI_Built_Expense_Tracker/), which proved to me that it was indeed viable, even if possibly frustrating because the model may not do exactly as you prefer.

## Aider

Aider is an Open-source CLI-based LLM Coding Assistant, in the same vein as Claude Code and others, but with more focus on being democratized. I do still default to Claude Sonnet 3.7, as Aider recommends, but it allows me to use other models as well. 

Being CLI-based is attractive to me, as a Neovim user. Visual Studio Code is great, but I still find myself deeply enjoying the Neovim experience, and it is just enjoyable to me that I can now have a coding assistant that plays well with my preferred coding experience.

![CLI Aider.png](/assets/blog/2025_04_14_Consolidating_Blog_with_Aider/cli-aider.png) 

So, I tested this out on the command line first, to see how it works. Initially I was a bit confused; it doesn't work like Cline, for example, where Cline more aggressively tries to expand it's awareness of your codebase. Instead, it's a bit more like Continue, but the indexing mechanism is .git, rather than a separate index.

In other words, I have to explicitly add files to the context, instead of the assistant finding them for me all the time. It does try to, if it is aware of those files, and asks to add them, but not as aggressively as Cline. It also provides commands for dropping files from context, along with adding, so I could reduce the context size.

As I used this, I found it made a lot of sense; I have more control over what I want the LLM to be thinking about, and similarly what I want to think about, so this is actually a better pair programming tool. 

In comparison, Cline and Cursor both felt like vibe-coding heavy; I didn't need to do anything other than specify what I wanted, and I could just tick the 'auto-approve' box and allow it to run while I went and did something else. 

Perhaps an Engineer will prefer Aider, and a Manager might prefer Cline/Cursor. 

## Updates to my personal website

The update to my personal website is quite simple, but it required a bunch of changes. As mentioned, I previously had two websites hosted on Github Pages; tehj.io and tehj.io/blog. I now wanted these to be consolidated into one website. 

This meant that I needed to convert Elm into Astro, and that was just a perfect job for an LLM to do. So I threw all the files from both projects into one directory, and let Aider run on this. It was kind of able to convert what I needed after a few tries. Interestingly, it did not remove a lot of the old files, and I had to explicitly tell it to remove Elm usage, before it successfully converted all the pieces. 

And even then, I had to go through and manually clean up the unused code. Case in point, it's not like the LLM is handling the whole job, it's really more like a turn-based pair programming. 

Either way, the resulting website is cleaner, and I got Aider to help consolidate and clean up the styles too, which it did, and I'm quite happy with the result. I may come back to this again in the future, but for now this is good. 
