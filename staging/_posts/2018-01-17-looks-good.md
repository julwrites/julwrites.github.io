---
layout: default
title: "Looks good"
date: 2018-01-17
---

I've finally gotten things looking more or less the way I would like on here. The blog is hidden - "hidden" more accurately, since it can be viewed basically in plaintext on github - and I'm hoping to use it as a kind of documentation. 

So what exactly goes into this website? (This serves both as a documentation for me and a reflection over the process of setting it up)

I started with just buying a domain and re-routing things, actually. I was previously on wix, which served well while I was in school - easy to set up, caters for all platforms - but I was starting to find that I wanted both an easier way to update my online presence and just a more stripped down, customizable landing page. 

A friend recommended buying a domain and using that, so I started on Namecheap, buying a domain which I intend to keep for as long as it is viable. With some set up, I managed to route it to my existing wix site, and set up a few URL redirects to other platforms such as git. It also came with a free email service, which I just conveniently routed to my usual email services. 

My primary goal was to be able to create and edit pages easily. Wix is nice for customizability, but the online editor gets really laggy, and nice as it is, I was getting tired of having to do things slowly. Being a programmer, I like using code if I can get it, and so I went looking for some code solutions. 

I looked specifically for a way to use primarily Markdown, since I wasn't going to be putting in much more than images, links, text. The color theme, fonts, and layout could be done once through HTML and CSS, and I could figure that out.

Next up was a place to host it. Here I decided to use github.io, because I was already on Github anyway, and it offers a pretty good service to update the site for every git push, plus it is essentially a free online repository. Only downside is that my code is all public - which is fine, really. My IP won't be on Github.

github.io uses Jekyll to pull Markdown and compile it into HTML, so with that I was able to set up a few HTML structures for the header and footer divisions that I wanted, and combine that into a layout that I would use across most of the site. I opted to strip out all JavaScript, partly because it's unnecessary for the site, and also because it automatically passes security ratings. The same kind of layout file is being used for posts, with minor changes to pull in all posts.

The rest of it really is just Markdown index files, each resting in a folder that is also the name of the page that it represents. All files are locally linked, which gives me a pretty quick retrieval of images and files. A bit of googling got me the code bits I needed to pull this or that in, and really the biggest headache was just aligning my projects' image galleries. 

Moving forward, I'll probably harden the HTML, update the theme slowly, and try to replace as many links as possible with icons - I've already done some, but I'll have to either think of or find icons for others. 

Should be fun. 