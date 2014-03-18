---
layout:   recipe
title:    String Interpolation
chapter:  Strings
---
## Problem

You want to create a string that contains a text representation of a
CoffeeScript Variable.

## Solution

Use CoffeeScript's ruby-like string interpolation instead of
JavaScript's string addition. You must use Double-quoted strings to 
allow for interpolation. Single-quoted strings are treated as literals.

Interpolation:

{% highlight coffeescript %}
muppet = "Beeker"
favorite = "My favorite muppet is #{muppet}!"

# => "My favorite muppet is Beeker!"
{% endhighlight %}

{% highlight coffeescript %}
square = (x) -> x * x
message = "The square of 7 is #{square 7}."

# => "The square of 7 is 49."
{% endhighlight %}

## Discussion

CoffeeScript interpolates strings in similar fashion to ruby. Most
expressions are valid inside the `#{...}` interpolation syntax.

CoffeeScript permits multiple expressions inside the interpolation
which can have side effects, but this is discouraged. Only the last
value will be returned.

{% highlight coffeescript %}
# You can do this, but don't. YOU WILL GO MAD.
square = (x) -> x * x
muppet = "Beeker"
message = "The square of 10 is #{muppet='Animal'; square 10}. Oh, and your favorite muppet is now #{muppet}."

# => "The square of 10 is 100. Oh, and your favorite muppet is now Animal."
{% endhighlight %}
