---
layout: recipe
title: Class Variables
chapter: Classes and Objects
---
## Creating Class Variables

You want to create a class variable.

## Solution

Use json notation in the class body; use `::` to access it outside:

{% highlight coffeescript %}
class Zoo
  MAX_ANIMALS: 50

Zoo::MAX_ZOOKEEPERS = 5

Zoo::MAX_ANIMALS
# => 50
{% endhighlight %}

## Discussion

Coffeescript will store these values on the class prototype (e.g. Zoo.prototype.MAX_ANIMALS) rather than on individual object instances, which conserves memory and gives a central location to store class-level values.
