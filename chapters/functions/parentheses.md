---
layout: recipe
title: When Function Parentheses Are Not Optional
chapter: Functions
---
## Problem

You want to call a function that takes no arguments, but don't want to use parentheses.

## Solution

Use parentheses anyway.

Another alternative is to utilize the do-notation like so:

{% highlight coffeescript %}
notify = -> alert "Hello, user!"
do notify if condition
{% endhighlight %}

This compiles to the following JavaScript:

{% highlight javascript %}
var notify;
notify = function() {
	return alert("Hello, user!");
};
if (condition) {
	notify();
}
{% endhighlight %}

## Discussion

Like Ruby, CoffeeScript allows you to drop parentheses to method calls. Unlike Ruby, however, CoffeeScript treats a bare function name as the pointer to the function. The practical upshot of this is that if you give no arguments to a method, CoffeeScript cannot tell if you want to call the function or use it as a reference.

Is this good or bad? It's just different. It creates an unexpected syntax case -- parentheses aren't _always_ optional -- but in exchange it gives you the ability to pass and receive functions fluently by name, something that's a bit clunky in Ruby.

This usage of the do-notation is a neat approach for CoffeeScript with parenphobia.
Some people simply prefer to write out the parentheses in the function call, though.
