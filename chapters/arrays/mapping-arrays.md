---
layout: recipe
title: Mapping Arrays
chapter: Arrays
---
## Problem

You have an array of objects and want to map them to another array, similar to Ruby's map.

## Solution

Use map() with an anonymous function, but don't forget about <a href="{{ site.baseurl }}/chapters/arrays/list-comprehensions">list comprehensions</a>.

{% highlight coffeescript %}
electric_mayhem = [ { name: "Doctor Teeth", instrument: "piano" },
                    { name: "Janice", instrument: "lead guitar" },
                    { name: "Sgt. Floyd Pepper", instrument: "bass" },
                    { name: "Zoot", instrument: "sax" },
                    { name: "Lips", instrument: "trumpet" },
                    { name: "Animal", instrument: "drums" } ]

names = electric_mayhem.map (muppet) -> muppet.name
# => [ 'Doctor Teeth', 'Janice', 'Sgt. Floyd Pepper', 'Zoot', 'Lips', 'Animal' ]
{% endhighlight %}

## Discussion

Because CoffeeScript has clean support for anonymous functions, mapping an array in CoffeeScript is nearly as easy as it is in Ruby.

Maps are are good way to handle complicated transforms and chained mappings in CoffeeScript. If your transformation is as simple as the one above, however, it may read more cleanly as a <a href="{{ site.baseurl }}/chapters/arrays/list-comprehensions">list comprehension</a>.
