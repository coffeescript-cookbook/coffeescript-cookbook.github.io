---
layout: recipe
title: Splitting a String
chapter: Strings
---
## Problem

You want to split a string.

## Solution

Use JavaScript's String split() method:

{% highlight coffeescript %}
"foo bar baz".split " "
# => [ 'foo', 'bar', 'baz' ]
{% endhighlight %}

## Discussion

String's split() is a standard JavaScript method. It can be used to split a string on any delimiter, including regular expressions. It also accepts a second parameter that specifies the number of splits to return.

{% highlight coffeescript %}
"foo-bar-baz".split "-"
# => [ 'foo', 'bar', 'baz' ]
{% endhighlight %}

{% highlight coffeescript %}
"foo   bar  \t baz".split /\s+/
# => [ 'foo', 'bar', 'baz' ]
{% endhighlight %}

{% highlight coffeescript %}
"the sun goes down and I sit on the old broken-down river pier".split " ", 2
# => [ 'the', 'sun' ]
{% endhighlight %}
