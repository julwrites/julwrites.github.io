--- 
layout: default 
title: Julian Writes 
---

# {{ page.title }}

<html>
    {% for post in site.posts %}
    <div class="post">
        <h3><a href="{{ post.url}}" title="{{ post.title }}">{{ post.title }}</a></h3>
        <h6><em>{{ post.date |date_to_string }}</em></h6>
        <p>{{ post.content }}</p>
    </div>
    {% endfor%}
</html>