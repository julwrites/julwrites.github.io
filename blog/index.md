--- 
layout: default 
title: Julian Writes 
---

# {{ page.title }}

<html>
    {% for post in site.posts %}
    <div class="post">
        <h3 href="{{ post.url}}" title="{{ post.title }}">{{ post.title }}</h3>
        <br>
        <h6><em>{{ post.date |date_to_string }}</em></h6>
        <br>
        <p>{{ post.content }}</p>
    </div>
    {% endfor%}
</html>