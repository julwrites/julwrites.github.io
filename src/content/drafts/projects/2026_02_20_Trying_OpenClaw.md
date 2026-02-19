---
title: "Foray into OpenClaw"
description: "Giving OpenClaw a try on an isolated Raspberry Pi 4"
pubDate: "2026-02-20"
tags: ["AI", "Self-Hosted", "OpenClaw"]
heroImage: "/assets/blog/2026_02_20_Trying_OpenClaw/openclaw_jiro.png"
---

I’ve always been fascinated by the idea of a "digital butler"; J.A.R.V.I.S. from Iron Man was part of the reason I got into tech in the first place! The many things that I saw in sci-fi: the smart home, the AI assistant, the capability to visualize and create so easily... 

I digress. Anyway, when I first heard about [OpenClaw](https://openclaw.ai), I was a little suspicious. I'm a software engineer by training, and it's been my life for 10 years. Now you want me to give root access to what? 

Furthermore, I had already managed to get a smart home working, and I was not about to give access to my smart home to an AI assistant. But hype in tech is kind of like smoke; if there's smoke, there's a fire. I wanted to see how big this fire was. 

Naturally, I decided to host it on a spare [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) as an experiment. 

It so happens, I had just purchased a year's subscription to Google AI Pro, and from a quick read on the OpenClaw website, I could use Gemini. Just as well; I was wondering how to maximize my usage.

## Set up

Installing on the Pi is easy; get the Raspberry Pi Imager, pick an image, flash it. I've had quite some success with High Endurance SD Cards—these Pis really burn through SD card lifespans—most SD cards are made for high read, low write operations, not to be used as a low-cost SSD, so I went with this. 

This was pretty standard. I wanted to keep things isolated and tightly controlled, so nothing secret is available on the Pi. 

## Setting up OpenClaw

This took a little bit more work. I followed this [blog post](https://ajfisher.me/2026/02/03/openclaw-raspberrypi-howto/) almost exactly. There's some things which are not the same on a Pi versus a Mac Mini (apparently the primary option for OpenClaw), so some skills and tools are not available, but that's fine. 

I had to set up a channel asap, and of course chose Telegram. Then I set up a model with Gemini, and a little `openclaw onboard` to get it started. Immediately I had a chat open and was able to start talking to OpenClaw over SSH. 

It took a little bit of work to figure out why OpenClaw wasn't responding to my messages on Telegram (I set it up explicitly to respond to my user ID). And then, I was in business. 

![OpenClaw Pairing](/assets/blog/2026_02_20_Trying_OpenClaw/openclaw_pairing_telegram.png)

## Lessons Learned (So Far)

1. I underestimated what it means to have a root-access AI

For starters, being able to tell your computer to go fix itself is a big deal. I had heard about this even from the creator of OpenClaw, but experiencing it is a rather different thing. 

![OpenClaw Self-fix](/assets/blog/2026_02_20_Trying_OpenClaw/openclaw_selffix.png)

2. AI has way more stamina than me

It is actually very fatiguing to have to keep up with an AI assistant. I know this from work, but to bring it into my personal messaging... It was fun for the first hour, and then became quickly obvious that it would essentially demand my attention incessantly if I wasn't careful. It will wait indefinitely for me to respond, of course, but there is a kind of mental load that comes with an unread message sitting and waiting for you. 

![OpenClaw Heartbeat](/assets/blog/2026_02_20_Trying_OpenClaw/openclaw_heartbeat.png)

I ended up setting very specific times and tasks for it to run. Things like reading news reports and checking stock tickers to give me a daily update. 

Perhaps more useful was the ability to help me with content creation. I asked it to help me write more and better, and it suggested creating a content calendar, and it would help me even draft the content if I gave it ideas and/or nudges. 

In the end, I pretty much re-wrote this entire article by hand, so maybe it wasn't super useful, but it was a pretty good facsimile of my writing, and a pretty good kick in the pants to myself. 

## What's next?

It's still only day 3 for me, so let's see what else I can make this do within budget. But for a start, it's pretty novel and interesting. It remains to be seen if it is actually useful for me.
