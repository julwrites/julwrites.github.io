---
layout: default
title: Flowline
---
# {{ page.title }}

---

A top-down puzzle game where the player creates flowlines by drawing on the screen to clear 15 levels

Developed the majority of gameplay mechanics including:

> A drawing mechanic using a discrete Vector Field

> A teleporting mechanic using basic collision detection.

> A swiveling/tracking turret using basic collision detection and AI

> Visual Effects Programming including Vector Field path, line of sight indicator and portal effects.

[Try it out!](http://games.digipen.edu/games/flowline)

---

<html>
    <div class="imageGrid">
        {% for img in site.static_files %}
            {% if img.path contains 'Flowline' %}
                <img class="img-thumb" src="{{ img.path }}" alt="{{ img.path }}">
            {% endif %}
        {% endfor%}
    </div>
</html>

---
