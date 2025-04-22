---
layout: archive
title: "Publications"
type: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
