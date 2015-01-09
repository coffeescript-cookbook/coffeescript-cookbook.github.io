---
layout: recipe
title: List Comprehensions
chapter: Arrays
---
## Problem

You have an array of objects and want to map them to another array, similar to Python's list comprehensions.

## Solution

Use a list comprehension, but don't forget about [mapping arrays]({{ site.baseurl }}/chapters/arrays/mapping-arrays).

{% highlight coffeescript %}
electric_mayhem = [ { name: "Doctor Teeth", instrument: "piano" },
                    { name: "Janice", instrument: "lead guitar" },
                    { name: "Sgt. Floyd Pepper", instrument: "bass" },
                    { name: "Zoot", instrument: "sax" },
                    { name: "Lips", instrument: "trumpet" },
                    { name: "Animal", instrument: "drums" } ]

names = (muppet.name for muppet in electric_mayhem)
# => [ 'Doctor Teeth', 'Janice', 'Sgt. Floyd Pepper', 'Zoot', 'Lips', 'Animal' ]
{% endhighlight %}

## Discussion

Because CoffeeScript directly support list comprehensions, they work pretty much as advertised wherever you would use one in Python. For simple mappings, list comprehensions are much more readable. For complicated transformations or for chained mappings, [mapping arrays]({{ site.baseurl }}/chapters/arrays/mapping-arrays) might be more elegant.
