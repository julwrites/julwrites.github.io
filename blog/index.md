--- 
layout: default 
title: Julian Writes 
---

# {{ page.title }}

<html>
    {% for post in site.posts %}
    <div class="post">
        <a href="{{ post.url}}" title="{{ post.title }}">{{ post.title }}</a>
        <a><em>{{ post.date |date_to_string }}</em></a>
        <p>{{ post.content }}</p>
    </div>
    {% endfor%}
</html>