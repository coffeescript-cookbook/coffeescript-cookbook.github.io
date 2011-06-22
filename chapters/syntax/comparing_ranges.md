---
layout: recipe
title: Comparing Ranges
chapter: Syntax
---
## Problem

You want to know if a variable is inside a given range.

## Solution

Use CoffeeScript's chained comparison syntax.

{% highlight coffeescript %}
maxDwarfism = 147
minAcromegaly = 213

height = 180

normalHeight = maxDwarfism < height < minAcromegaly
# => true
{% endhighlight %}

## Discussion

This is a nice feature lifted from Python. Instead of writing out the full comparison like

{% highlight coffeescript %}
normalHeight = height > maxDwarfism && height < minAcromegaly
{% endhighlight %}

CoffeeScript allows us to chain the two comparisons together in a form that more closely matches the way a mathematician would write it.
