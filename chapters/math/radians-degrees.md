---
layout: recipe
title: Converting Radians and Degrees
chapter: Math
---
## Problem

You need to convert between radians and degrees.

## Solution

Use Javascript's Math.PI and a simple formula to convert between the two.

{% highlight coffeescript %}
# To convert from radians to degrees
radiansToDegrees = (radians) ->
    degrees = radians * 180 / Math.PI

radiansToDegrees(1)
# => 57.29577951308232

# To convert from degrees to radians
degreesToRadians = (degrees) ->
    radians = degrees * Math.PI / 180

degreesToRadians(1)
# => 0.017453292519943295
{% endhighlight %}

## Discussion

Questions?
