---
layout: default
title: BIBBB
---
# {{ page.title }}

---

A puzzle game where the player has to get the boxer from one end of the level to the other using only the boxes in that level

Responsibilities:
Developed tools for the team including:
+ Level Editor using a Prototype to clone from and place object instances.
+ Undo and Redo functionalities using a Memento method save/restore.
+ Visual Effects Programming including selection indicators, gravity and magnet forces. 

[Try it out!]("http://games.digipen.edu/downloads/bibbb")

---

{% for img in site.static_files %}
    {% if img.path contains 'BIBBB' %}
        <a href="{{ img.path }}">{{ img.path }}</a>
    {% endif %}
{% endfor%}