---
layout: recipe
title: Replacing Substrings
chapter: Regular Expressions
---
## Problem

You need to replace a portion of a string with another value.

## Solution

Use the JavaScript `replace` method. `replace` matches with the given string, and returns the edited string.

The first version takes 2 arguments: _pattern_ and _string replacement_

{% highlight coffeescript %}
"JavaScript is my favorite!".replace /Java/, "Coffee"
# => 'CoffeeScript is my favorite!'

"foo bar baz".replace /ba./, "foo"
# => 'foo foo baz'

"foo bar baz".replace /ba./g, "foo"
# => 'foo foo foo'
{% endhighlight %}

The second version takes 2 arguments: _pattern_ and _callback function_

{% highlight coffeescript %}
"CoffeeScript is my favorite!".replace /(\w+)/g, (match) ->
  match.toUpperCase()
# => 'COFFEESCRIPT IS MY FAVORITE!'
{% endhighlight %}

The callback function is invoked for each match, and the match value is passed as the argument to the callback.

## Discussion

Regular Expressions are a powerful way to match and replace strings.
