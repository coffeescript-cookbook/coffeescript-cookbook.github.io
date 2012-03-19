---
layout: recipe
title: Lowercasing a String
chapter: Strings
---
## Problem

You want to lowercase a string.

## Solution

Use JavaScript's String toLowerCase() method:

{% highlight coffeescript %}
"ONE TWO THREE".toLowerCase()
# => 'one two three'
{% endhighlight %}

## Discussion

`toLowerCase()` is a standard JavaScript method. Don't forget the parentheses.

### Syntax Sugar

You can add some Ruby-like syntax sugar with the following shortcut:

{% highlight coffeescript %}
String::downcase = -> @toLowerCase()
"ONE TWO THREE".downcase()
# => 'one two three'
{% endhighlight %}

The snippet above demonstrates a few features of CoffeeScript:

* The double-colon `::` is shorthand for saying `.prototype.`
* The "at" sign `@` is shorthand for saying `this.`

The code above compiles in to the following JavaScript:

{% highlight javascript %}
String.prototype.downcase = function() {
  return this.toLowerCase();
};
"ONE TWO THREE".downcase();
{% endhighlight %}

**Note:** Although it's quite common in languages like Ruby, extending native objects is often considered bad practice in JavaScript (see: [Maintainable JavaScript: Don’t modify objects you don’t own](http://www.nczonline.net/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/); [Extending built-in native objects. Evil or not?](http://perfectionkills.com/extending-built-in-native-objects-evil-or-not/)).