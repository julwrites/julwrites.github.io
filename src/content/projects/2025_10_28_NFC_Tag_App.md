---
title: "NFC Tag App"
description: "I've had some time recently to test out an idea"
pubDate: "October 28 2025"
heroImage: "/assets/blog/2025_10_28_NFC_Tag_App/google_play_console.png"
---

Recently the [tech community](https://geekshacking.com) I lead was asked to consider offering an industry partnership for some students, and along with this we had to brainstorm a project that we were interested to mentor these students through. Now of course this was highly aligned with our values of giving back and growing and geekiness, and we were on board immediately. 

We brainstormed some ideas, and came down to one idea which we thought was really fun, that didn't need to monetized to support its continuation, and that would help to enhance the fun and uniqueness factor of our community. 

I won't go into the idea itself, since it would then make the students' project a bit less meaningful, but suffice to say it is NFC related. 

## What can I say, I'm restless

Now, I should just be letting these students work on the project on their own, and figure things out as they go along. But I'm really a restless soul, and with AI I'm even more restless than ever before. 

I figured, I could do a little prototype of my own, and motivated by the impending doom of my play console app (which I paid $25 good dollars for!), I decided to quickly do up a prototype that I could launch on the Play Store. 

![Google Play Warning](/assets/blog/2025_10_28_NFC_Tag_App/google_play_warning.png)

More to the point, I have recently learned that I can connect Claude Code and Codex CLI to Deepseek, which means I can get the CLI experience of the best coding agent, with the price of the cheapest top tier model right now. This. Is. Great. 

![Claude Code](/assets/blog/2025_10_28_NFC_Tag_App/claude_code.png)

And this does pretty well too, at least while working on a small app like this. I was able to get tag reading up fairly quickly with a few rounds of prompting. Tag writing was a bit tricky because the models kept assuming the wrong usage of the NDEF library, and kept removing it instead of properly integrating it. 

![Claude Code Working](/assets/blog/2025_10_28_NFC_Tag_App/claude_code_working.png)

Styling and review and documentation was a breeze, of course. 

![Codex](/assets/blog/2025_10_28_NFC_Tag_App/codex.png)

I tried the same experiment too with Codex CLI, which I heard was even better for connecting with third party models.

![Codex Working](/assets/blog/2025_10_28_NFC_Tag_App/codex_working.png)

It did pretty well too, but then of course it is the same underlying model. 

## Some learnings

Honestly, the Flutter app wasn't much of a leaerning. I could have done this on my own with a bit more time and familiarity. 

What was interesting was doing this with a whole new ecosystem of tools and on an unfamiliar platform. I'm mostly used to deploying desktop or web apps, but not so much mobile apps. 

![Google Play Console](/assets/blog/2025_10_28_NFC_Tag_App/google_play_console.png)

The Google Play Console was surprisingly comprehensive. I say surprisingly in comparison to what it requires to host a web app or desktop app, which often is almost no checks! This required me to fill out a whole questionnaire on my app, what it did, whether it was safe for kids, whether I stole data, or sold data, or even stored data... 

The other part which I thought was really interesting, was that I could now ask AI to generate icons and banner images for me. So I did! 

In fact, I just went to Bing Creator and asked it for a couple of images, and it kind of spat out something for me, which I could then use. That's something I never could do before, and at least this time while working on it, I do have options. I could have even done this with Apple's Image Playground, or with some diffusion model on my Mac Mini. 

To be clear, I don't think this changes the need for good, thoughtful design. But it does mean that it is that much easier to generate a working prototype, which is sometimes all you need. 

For now, I've just done this for fun (and to keep my Google Play Console license active). In fact, I'm still waiting for my app to pass Google's review! But I do have the sense that I can be doing much more now with this development stack than I used to. 
