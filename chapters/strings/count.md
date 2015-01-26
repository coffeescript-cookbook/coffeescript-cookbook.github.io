---
layout: recipe
title: Count Substring
chapter: Strings
---
## Problem

You need to count occurrence of a search string within a message.

## Solution

{% highlight coffeescript %}
count = (substr, string) ->
  num = pos = 0
  return 1/0 unless substr.length
  num++ while pos = 1 + string.indexOf substr, pos
  num

count 'xyz', '|xyz|xyz|cd|xyz|ef|xyz|g'  # => 4

{% endhighlight %}