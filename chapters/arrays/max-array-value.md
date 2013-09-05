---
layout: recipe
title: Max Array Value
chapter: Arrays
---
## Problem

You need to find the largest value contained in an array.

## Solution

You can use Math.max() JavaScript method along with splats.

{% highlight coffeescript %}
Math.max [12, 32, 11, 67, 1, 3]...
# => 67
{% endhighlight %}

Alternatively, it's possible to use ES5 `reduce` method. For backward compatibility with older JavaScript implementations, use the above.

{% highlight coffeescript %}
# ECMAScript 5
[12,32,11,67,1,3].reduce (a,b) -> Math.max a, b
# => 67
{% endhighlight %}

## Discussion

`Math.max` compares every argument and returns the largest number from arguments. The ellipsis (`...`) converts every array value into argument which is given to the function. You can also use it with other functions which take variable amount of arguments, such as `console.log`.
