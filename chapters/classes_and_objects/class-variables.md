---
layout: recipe
title: Class Variables
chapter: Classes and Objects
---
## Problem

You want to create a class variable.

## Solution

{% highlight coffeescript %}
class Zoo
  @MAX_ANIMALS: 50
  MAX_ZOOKEEPERS: 3

Zoo.MAX_ANIMALS
# => 50

Zoo.MAX_ZOOKEEPERS
# => undefined (it is an instance variable)

zoo = new Zoo
zoo.MAX_ZOOKEEPERS
# => 3
{% endhighlight %}

## Discussion

Coffeescript will store these values on the object itself rather than on the object prototype (and thus on individual object instances), which conserves memory and gives a central location to store class-level values.
