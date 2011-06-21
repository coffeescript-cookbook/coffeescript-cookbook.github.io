---
layout: recipe
title: Uppercasing a String
chapter: Strings
---
## Problem

You want to uppercase a string.

## Solution

Use JavaScript's String toUpperCase() method:

{% highlight coffeescript %}
"one two three".toUpperCase()
# => 'ONE TWO THREE'
{% endhighlight %}

## Discussion

`toUpperCase()` is a standard JavaScript method. Don't forget the parentheses.

### Syntax Sugar

You can add some Ruby-like syntax sugar with the following shortcut:

{% highlight coffeescript %}
String::upcase = -> @toUpperCase()
"one two three".upcase()
# => 'ONE TWO THREE'
{% endhighlight %}

The snippet above demonstrates a few features of CoffeeScript:

* The double-colon `::` is shorthand for saying `.prototype.`
* The "at" sign `@` is shorthand for saying `this.`

The code above compiles in to the following JavaScript:

{% highlight javascript %}
String.prototype.upcase = function() {
  return this.toUpperCase();
};
"one two three".upcase();
{% endhighlight %}