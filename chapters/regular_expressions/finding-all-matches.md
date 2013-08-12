---
layout: recipe
title: Finding All Matches
chapter: Regular Expressions
---
## Problem

You need to find all matches, not just the first.

For example,

{% highlight coffeescript %}
/\d+/g.exec "I have 4 dogs, 7 cats, and 42 gold fish."
# => ["4"]
{% endhighlight %}

## Solution

{% highlight coffeescript %}
RegExp::execAll = (haystack) ->
    return [] unless @global
    match[0] while match = @exec haystack

text = "I have 4 dogs, 7 cats, and 42 gold fish."
/d+/g.execAll text
# => ["4", "7", "42"]
{% endhighlight %}

## Discussion

The above throws away submatches, in order to simplify the result.  You can keep them with this variant.

{% highlight coffeescript %}
RegExp::execAll = (haystack) ->
    return [] unless @global
    match while match = @exec haystack

/(\d+) (\w+)/g.execAll "I have 4 dogs, 7 cats, and 42 gold fish."
# => [["4 dogs","4","dogs"],["7 cats","7","cats"],["42 gold","42","gold"]]
{% endhighlight %}

The first line of `execAll` prevents an infinite loop caused by non-global expressions.  This could be further 
improved by creating a clone of the RegExp that is global, and use that.

You must not save a reference to this expression (like `a = /xyx/g`) if you plan to call `execAll` more than once.  
The same behavior be observed with the regular `exec` method.

{% highlight coffeescript %}
s = "I have 4 dogs, 7 cats, and 42 gold fish."
myRegEx = /\d+/g
myRegEx.exec s
# => ["4"]
myRegEx.execAll s
# => ["7", "42"]
myRegEx.exec s
# => null
{% endhighlight %}

Instead use:

{% highlight coffeescript %}
/\d+/g.execAll s
# => ["4", "7", "42"]
/\d+/g.execAll s
# => ["4", "7", "42"]
{% endhighlight %}

