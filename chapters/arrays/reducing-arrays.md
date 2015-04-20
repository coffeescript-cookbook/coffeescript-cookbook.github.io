---
layout: recipe
title: Reducing Arrays
chapter: Arrays
---
## Problem

You have an array of objects and want to reduce them to a value, similar to Ruby's `reduce()` and `reduceRight()`.

## Solution

You can simply use Array's `reduce()` and `reduceRight()` methods along with an anonymous function, keeping the code clean and readable. The reduction may be something simple such as using the `+` operator with numbers or strings.

{% highlight coffeescript %}
[1,2,3,4].reduce (x,y) -> x + y
# => 10
{% endhighlight %}

{% highlight coffeescript %}
["words", "of", "bunch", "A"].reduceRight (x, y) -> x + " " + y
# => 'A bunch of words'
{% endhighlight %}

Or it may be something more complex such as aggregating elements from a list into a combined object.

{% highlight coffeescript %}
people = [
    { name: 'alec', age: 10 }
    { name: 'bert', age: 16 }
    { name: 'chad', age: 17 }
]

people.reduce (x, y) ->
    x[y.name]= y.age
    x
, {}
# => { alec: 10, bert: 16, chad: 17 }
{% endhighlight %}

## Discussion

Javascript introduced `reduce` and `reduceRight` in version 1.8. Coffeescript provides a natural and simple way to express anonymous functions. Both go together cleanly in the problem of merging a collection's items into a combined result.
