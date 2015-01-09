---
layout: recipe
title: Working with Exponents and Logarithms
chapter: Math
---
## Problem

You need to do some calculations that involve exponents and logarithms.

## Solution

Use Javascript's Math object to provide common mathematical functions.

{% highlight coffeescript %}
# Math.pow(x, y) returns x^y
Math.pow(2, 4)
# => 16

# Math.exp(x) returns E^x and is shorthand for Math.pow(Math.E, x)
Math.exp(2)
# => 7.38905609893065

# Math.log returns the natural (base E) log
Math.log(5)
# => 1.6094379124341003
Math.log(Math.exp(42))
# => 42

# To get a log with some other base n, divide by Math.log(n)
Math.log(100) / Math.log(10)
# => 2

{% endhighlight %}

## Discussion

For more information on the Math object see the documentation on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). Also refer to [Math Constants]({{ site.baseurl }}/chapters/math/constants) for discussion of the various constants in the Math object.
