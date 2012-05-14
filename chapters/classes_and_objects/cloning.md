---
layout: recipe
title: Cloning an Object (Deep Copy)
chapter: Classes and Objects
---
## Problem

You want to clone an object with all its sub-objects.

## Solution

{% highlight coffeescript %}
clone = (obj) ->
  if not obj? or typeof obj isnt 'object'
    return obj

  if obj instanceof Date
    return new Date(obj.getTime()) 

  if obj instanceof RegExp
    flags = ''
    flags += 'g' if obj.global?
    flags += 'i' if obj.ignoreCase?
    flags += 'm' if obj.multiline?
    flags += 'y' if obj.sticky?
    return new RegExp(obj.source, flags) 

  newInstance = new obj.constructor()

  for key of obj
    newInstance[key] = clone obj[key]

  return newInstance

x =
  foo: 'bar'
  bar: 'foo'

y = clone(x)

y.foo = 'test'

console.log x.foo isnt y.foo, x.foo, y.foo
# => true, bar, test
{% endhighlight %}

## Discussion

The difference between copying an object through assignment and through this clone-function is how they handle references. The assignment only copies the object's reference, whereas the clone-function creates a complete new object by

* creating a new object like the source object,
* copying all attributes form the source object to the new object and
* repeating these steps for all sub-objects by calling the clone-function recursively.

Example of an assignment copy:

{% highlight coffeescript %}
x =
  foo: 'bar'
  bar: 'foo'

y = x

y.foo = 'test'

console.log x.foo isnt y.foo, x.foo, y.foo
# => false, test, test
{% endhighlight %}

As you can see, when you change `y` after the copy, you also change `x`.
