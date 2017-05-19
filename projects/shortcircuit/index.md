---
layout: default
title: Short Circuit 
---
# {{ page.title }}

---

A fast paced third person shooter where the player traverses 8 floors of a robot-overrun facility using his skill, gun, and some nifty grenades

Responsibilities:

Developed and maintained the following:
+ Data-driven Game entities/behaviors using a Builder factory to clone and specialize Archetypes.
+ Level Editor and Object Editor which included the following functionalities:
    1. Run-time creation, deletion and modification of objects and their components.
    2. Undo, Redo and ‘Restore Last Saved State’ functionality using a Memento method save/restore.
+ Mediator model Event Handler for Collision resolution and Message passing.
+ Visual Effects Programming including electricity, lasers, explosions, and teleporting.

[Try it out!](http://games.digipen.edu/games/shortcircuit)

---

<html>
{% for img in site.static_files %}
    {% if img.path contains 'ShortCircuit' %}
        <img src="{{ img.path }}" alt="{{ img.path }}">
    {% endif %}
{% endfor%}
</html>

---
