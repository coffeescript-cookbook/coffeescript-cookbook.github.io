---
layout: recipe
title: Create a jQuery Plugin
chapter: jQuery
---
## Problem

You'd like to create jQuery plugin using CoffeeScript

## Solution

{% highlight coffeescript %}
# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.fn.extend
  # Change pluginName to your plugin's name.
  pluginName: (options) ->
    # Default settings
    settings =
      option1: true
      option2: false
      debug: false

    # Merge default settings with options.
    settings = $.extend settings, options

    # Simple logger.
    log = (msg) ->
      console?.log msg if settings.debug

    # _Insert magic here._
    return @each ()->
      log "Preparing magic show."
      # You can use your settings in here now.
      log "Option 1 value: #{settings.option1}"
{% endhighlight %}

## Discussion

Here are a couple of examples of how to use your new plugin.

### JavaScript

{% highlight javascript %}
$("body").pluginName({
  debug: true
});

{% endhighlight %}

### CoffeeScript:

{% highlight coffeescript %}
$("body").pluginName
  debug: true

{% endhighlight %}
