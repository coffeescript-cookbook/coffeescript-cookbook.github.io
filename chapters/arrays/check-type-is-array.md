---
layout: recipe
title: Check if type of value is an Array
chapter: Arrays
---
## Problem

You want to check if a value is an `Array`.

{% highlight coffeescript %}
myArray = []
console.log typeof myArray // outputs 'object'
{% endhighlight %}

The `typeof` operator gives a faulty output for arrays.

## Solution

Use the following code:

{% highlight coffeescript %}
typeIsArray = Array.isArray || ( value ) -> return {}.toString.call( value ) is '[object Array]'
{% endhighlight %}

To use this, just call `typeIsArray` as such:

{% highlight coffeescript %}
myArray = []
typeIsArray myArray // outputs true
{% endhighlight %}

## Discussion

The method above has been adopted from "the Miller Device". An alternative is to use Douglas Crockford's snippet:

{% highlight coffeescript %}
typeIsArray = ( value ) ->
    value and
        typeof value is 'object' and
        value instanceof Array and
        typeof value.length is 'number' and
        typeof value.splice is 'function' and
        not ( value.propertyIsEnumerable 'length' )
{% endhighlight %}
