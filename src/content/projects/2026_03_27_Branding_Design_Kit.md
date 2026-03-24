---
title: "Building a Brand Design Kit with AI"
description: "A look into how I used Gemini and Jules to generate, refine, and implement a full branding design kit for my site."
pubDate: "Mar 27 2026"
---

A website is always a work in progress. Recently, I decided it was time to establish a cohesive visual identity for my personal site. The goal wasn't just to make it look nicer, but to build out a solid branding design kit that could serve as the foundation for the whole site. I didn't want to start completely from scratch, so I decided to see how far I could get with AI tools like Gemini and Jules.

### Extrapolating Themes with Gemini

The first step was figuring out what the brand should actually represent. I fed Gemini a bunch of my past blog posts and projects and asked it to extrapolate a set of core themes. From there, I asked it to conceptualize how those themes could translate into a logo.

We went through several rounds of iteration. I refined the concepts, gave feedback, and slowly honed in on a rough idea of what I liked. It was an interesting process—less like directing a designer and more like exploring a massive possibility space together. As a maker, you usually have to learn every skill yourself or pay someone else. This felt like a completely new third option.

Here are a couple of the early iterations that Gemini generated as we tried to nail down the core logo concept:

![Gemini Iteration 1](/assets/blog/2026_03_27_Branding_Design_Kit/gemini_iteration_1.png)

![Gemini Iteration 2](/assets/blog/2026_03_27_Branding_Design_Kit/gemini_iteration_2.png)

### From Logo to Branding Assets

Once we had a solid logo concept, I asked Gemini to expand that single idea into a full set of branding assets. I wanted more than just an icon; I wanted colors, typography suggestions, and secondary elements that felt cohesive.

Here's the branding asset sheet that Gemini came up with:

![Gemini Branding Assets](/assets/blog/2026_03_27_Branding_Design_Kit/gemini_branding_assets.png)

At this point, I had a great visual reference, but I still needed to turn it into something usable. Converting the AI-generated imagery cleanly into SVG format proved to be a bit tricky. Instead of wrestling with vector tracing, I took a different approach.

I gave the generated branding assets image back to Gemini and asked it to convert the visual design into an HTML page that approximated the layout and styling. This generated page became my initial `/branding` route on the website.

### Fine-Tuning and Building the Design System

With the rough HTML in place, I took the design into "antigravity" (my manual fine-tuning process). I spent some time tweaking the logo paths by hand until I was completely happy with how it looked and scaled.

Once the core logo and base colors were solid, it was time to build a real system. I brought Jules into the loop. I asked Jules to take the initial branding assets and expand them into a full, robust design system.

My website, `tehj.io`, became the perfect testing ground. I could easily host and view the branding assets live, reviewing how the design system translated into actual CSS variables, typography scales, and component structures.

### Site-Wide Application

The final step was applying the new design system to the rest of the site. I tasked Jules with scouring the entire codebase—looking for hardcoded colors, inconsistent spacing, and legacy styles—and suggesting the necessary changes to bring everything into alignment with the new kit.

Here are some localized, before-and-after comparisons showing how the design system propagated to specific features across the repository:

#### The Logo Identity
![Logo Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/identity_diff.png)

#### The Main Navigation Header
![Header Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/topnav_diff.png)

#### Interface Buttons and Cards
![Button Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/comp_btn_diff.png)

#### Typography Updates
![Typography Before and After](/assets/blog/2026_03_27_Branding_Design_Kit/text_style_diff.png)

![Final site design system live](/assets/blog/2026_03_27_Branding_Design_Kit/final_design_system.png)

The result is a much more cohesive, intentional design across the entire site, rooted in a visual identity that feels unique to my work. It was a fascinating workflow, blending high-level AI conceptualization with meticulous manual refinement and AI-assisted implementation.
