---
layout: recipe
title: Extending Built-in Objects
chapter: Metaprogramming
---
## Problem

You want to extend a class to add new functionality or replace old.

## Solution

Use `::` to assign your new function to the prototype of the object or class.

{% highlight coffeescript %}
String::capitalize = () ->
  (this.split(/\s+/).map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '

"foo bar     baz".capitalize()
# => 'Foo Bar Baz'
{% endhighlight %}

## Discussion

Objects in JavaScript (and thus, in CoffeeScript) have a prototype member that defines what member functions should be available on all objects based on that prototype. In CoffeeScript, you can access the prototype directly via the `::` operator.

**Note:** Although it's quite common in languages like Ruby, extending native objects is often considered bad practice in JavaScript (see: [Maintainable JavaScript: Don’t modify objects you don’t own](http://www.nczonline.net/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/); [Extending built-in native objects. Evil or not?](http://perfectionkills.com/extending-native-builtins/)).
