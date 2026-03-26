---
title: "Building a Brand Design Kit with AI"
description: "A look into how I used Gemini and Jules to generate, refine, and implement a full branding design kit for my site."
pubDate: "Mar 27 2026"
---

This website is always a work in progress, but recently I thought... Maybe I should start considering my personal branding. And what do you know, I just got a Google AI Pro subscription! 

Gemini may not be the best model in a particular category, but having so many model type options is fascinating and also maybe useful for this. Not all providers have text, vision, image generation, video generation, autonomous agents...

So... I pulled up Gemini, and started talking to it.

### What have I already said about me?

The first step was figuring out what my branding should represent. I basically asked Gemini here to read my website, past blog posts and projects and asked it to extrapolate a set of core ideas/themes. 

Using these, I asked it to conceptualize a set of logos.

We went through several rounds of iteration; I refined the concepts, gave feedback, and slowly honed in on a rough idea of what I liked. This felt a lot like working with a design consultant; they would come in, ask questions about what this was about, and then try to suggest some options for what it could be. I'd say ok, or no, or how about changing it this way or that?

![Gemini Iteration 1](/assets/blog/2026_03_27_Branding_Design_Kit/gemini_iteration_1.png)

Eventually we started to converge; I wanted the website in the logo, and I wanted the t and j to be prominent. I liked the idea of having the cross as part of it, and kind of was interested in having a pen or a keycap as a little nod to my writing/building hobbies.

So from here I asked it to pick one, and flesh that out more strongly. Now, I really liked this idea. 

![Gemini Iteration 2](/assets/blog/2026_03_27_Branding_Design_Kit/gemini_iteration_2.png)

### How about...

Once we had a solid logo concept, I asked Gemini to expand the icon into a full set of branding assets. This meant colors, typography suggestions, and secondary elements that felt cohesive.

Gemini took 2-3 tries, and landed on something like this. 

![Gemini Branding Assets](/assets/blog/2026_03_27_Branding_Design_Kit/gemini_branding_assets.png)

This was pretty good! It wasn't comprehensive enough, but that could be expanded now that the idea was put down. The next new problem was turning it into something I could export as code, so that I could actually tweak it. 

I struggled for awhile trying to turn this or that into SVG, and then eventually realized I could just ask it to convert the visual design into an HTML page that approximated the layout and styling. This generated page became my initial `/branding` route on the website.

### Fine-tuning

With the rough HTML in place, I took the design into Antigravity and launched this locally so I could make semi-manual changes and see them in real time. I focused first on the logo, then the color themes. Then the rest kind of just fell into place, and the branding page was good enough as reference. 

At this point I ran out of tokens on Antigravity, so...

Jules it is. I asked Jules to take the initial branding assets and expand them into a full, robust design system, and iterated on this a few times. I had also set up my staging version so I could actually observe the changes semi-real-time and see if I was doing everything correctly. 

### Site-Wide Application

The final step was applying the new design system to the rest of the site. I again got Jules to read through the entire codebase—looking for hardcoded colors, inconsistent spacing, and legacy styles—and suggesting the necessary changes to bring everything into alignment with the new kit.

I thought the final product was pretty nice! The logo is quite clean and minimal (one of my criteria for logos is that a child should be able to draw it), and the colors pop nicely against each other.  

#### The Logo Identity
![Logo Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/identity_diff.png)

#### The Main Navigation Header
![Header Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/topnav_diff.png)

#### Interface Buttons and Cards
![Button Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/comp_btn_diff.png)

#### Typography Updates
![Typography Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/text_style_diff.png)

Perhaps very nicely, the whole branding design kit could live in the website itself; this is really useful for any future updates to my website, since I can always just ask an agent to refer to this and style accordingly. It's not perfect (you'll see some of the measurements are all over the place), but good enough for my use. 

![Final site design system live](/assets/blog/2026_03_27_Branding_Design_Kit/final_design_system.png)