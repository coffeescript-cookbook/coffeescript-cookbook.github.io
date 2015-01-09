---
layout: recipe
title: Math Constants
chapter: Math
---
## Problem

You need to use common mathematical constants like pi or e.

## Solution

Use Javascript's Math object to provide commonly needed mathematical constants.

{% highlight coffeescript %}
Math.PI
# => 3.141592653589793

# Note: Capitalization matters! This produces no output, it's undefined.
Math.Pi
# =>

Math.E
# => 2.718281828459045

Math.SQRT2
# => 1.4142135623730951

Math.SQRT1_2
# => 0.7071067811865476

# Natural log of 2. ln(2)
Math.LN2
# => 0.6931471805599453

Math.LN10
# => 2.302585092994046

Math.LOG2E
# => 1.4426950408889634

Math.LOG10E
# => 0.4342944819032518

{% endhighlight %}

## Discussion

For another example of how a math constant is used in a real world problem, refer to the [Converting Radians and Degrees]({{ site.baseurl }}/chapters/math/radians-degrees) section of this Math chapter.
