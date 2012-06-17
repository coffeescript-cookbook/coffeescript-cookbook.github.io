---
layout: recipe
title: Trimming Whitespace from a String
chapter: Strings
---
## Problem

You want to trim whitespace from a string.

## Solution

Use JavaScript's Regular Expression support to replace whitespace.

To trim leading and trailing whitespace, use the following:

{% highlight coffeescript %}
"  padded string  ".replace /^\s+|\s+$/g, ""
# => 'padded string'
{% endhighlight %}

To trim only leading whitespace, use the following:

{% highlight coffeescript %}
"  padded string  ".replace /^\s+/g, ""
# => 'padded string  '
{% endhighlight %}

To trim only trailing whitespace, use the following:

{% highlight coffeescript %}
"  padded string  ".replace /\s+$/g, ""
# => '  padded string'
{% endhighlight %}

## Discussion

Opera, Firefox and Chrome all have a native string prototype `trim` method, and the other browsers could add one as well. For this particular method, I would use the built-in method where possible, otherwise create a polyfill:

{% highlight coffeescript %}
unless String::trim then String::trim = -> @replace /^\s+|\s+$/g, ""

"  padded string  ".trim()
# => 'padded string'
{% endhighlight %}


### Syntax Sugar

You can add some Ruby-like syntax sugar with the following shortcuts:

{% highlight coffeescript %}
String::strip = -> if String::trim? then @trim() else @replace /^\s+|\s+$/g, ""
String::lstrip = -> @replace /^\s+/g, ""
String::rstrip = -> @replace /\s+$/g, ""

"  padded string  ".strip()
# => 'padded string'
"  padded string  ".lstrip()
# => 'padded string  '
"  padded string  ".rstrip()
# => '  padded string'
{% endhighlight %}

For an interesting discussion and benchmarks of JavaScript `trim` performance, see [this blog post](http://blog.stevenlevithan.com/archives/faster-trim-javascript) by Steve Levithan.
