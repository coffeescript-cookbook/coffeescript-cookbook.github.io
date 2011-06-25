---
layout: recipe
title: Finding Substrings
chapter: Strings
---
## Problem

You need to find the first or last occurrence of a search string within a message.

## Solution

Use Javascript's indexOf() and lastIndexOf() to find the first and last occurrences of a string, respectively.
Syntax: string.indexOf searchstring, start

{% highlight coffeescript %}
message = "This is a test string. This has a repeat or two. This might even have a third."
message.indexOf "This", 0
# => 0

# Modifying the start parameter
message.indexOf "This", 5
# => 23

message.lastIndexOf "This"
# => 49

{% endhighlight %}

## Discussion

Still need recipe to count occurrences of a given string within a message.
