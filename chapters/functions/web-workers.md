---
layout: recipe
title: Web Workers
chapter: Functions
---
## Problem

You want to run client-side coffeescript in a non-UI thread.

## Solution

To spawn a web worker, do something like this:

{% highlight coffeescript %}
worker = new Worker 'myworker.js'
worker.onmessage = (response) -> console.info response
worker.postMessage document.URL # give the worker a URL just for fun
{% endhighlight %}

The web worker itself (`myworker.coffee`) can look like this:

{% highlight coffeescript %}
@onmessage = (e) ->
  url = e.data
  # do something with url...
  outgoing = hello: 'world'
  @postMessage outgoing
{% endhighlight %}

## Discussion

Functions and DOM stuff (including `console`) can't cross the web-worker barrier.