---
layout: recipe
title: Faster Fibonacci Algorithm
chapter: Math
---
## Problem

You would like to calculate a number N in the Fibonacci sequence but want
to do it quickly.

## Solution

The following solution (which can still be improved on) was originally
talked about on Robin Houston's blog.

Here are a few links talking about the algorithm and ways to improve it:
* [http://bosker.wordpress.com/2011/04/29/the-worst-algorithm-in-the-world/](http://bosker.wordpress.com/2011/04/29/the-worst-algorithm-in-the-world/)
* [http://www.math.rutgers.edu/~erowland/fibonacci](http://www.math.rutgers.edu/~erowland/fibonacci.html)
* [http://jsfromhell.com/classes/bignumber](http://jsfromhell.com/classes/bignumber)
* [http://www.math.rutgers.edu/~erowland/fibonacci](http://www.math.rutgers.edu/~erowland/fibonacci.html)
* [http://bigintegers.blogspot.com/2010/11/square-division-power-square-root](http://bigintegers.blogspot.com/2010/11/square-division-power-square-root.html)
* [http://bugs.python.org/issue3451](http://bugs.python.org/issue3451)

This code is in gist form here:
[https://gist.github.com/1032685](https://gist.github.com/1032685)

{% highlight coffeescript %}
###
Author: Jason Giedymin <jasong _a_t_ apache -dot- org>
        http://www.jasongiedymin.com
        https://github.com/JasonGiedymin

This CoffeeScript Javascript Fast Fibonacci code is
based on the python code from Robin Houston's blog.
See below links.

A few things I want to introduce in time are implementations of
Newtonian, Burnikel / Ziegler, and Binet's algorithms on top
of a Big Number framework.

Todo:
- https://github.com/substack/node-bigint
- BZ and Newton mods.
- Timing

###

MAXIMUM_JS_FIB_N = 1476

fib_bits = (n) ->
	#Represent an integer as an array of binary digits.

	bits = []
	while n > 0
    	[n, bit] = divmodBasic n, 2
    	bits.push bit

  	bits.reverse()
  	return bits

fibFast = (n) ->
	#Fast Fibonacci

	if n < 0
		console.log "Choose an number >= 0"
		return

	[a, b, c] = [1, 0, 1]

	for bit in fib_bits n
	    if bit
	    	[a, b] = [(a+c)*b, b*b + c*c]
	    else
	    	[a, b] = [a*a + b*b, (a+c)*b]

	    c = a + b
	  	return b

divmodNewton = (x, y) ->
	throw new Error "Method not yet implemented yet."

divmodBZ = () ->
	throw new Error "Method not yet implemented yet."

divmodBasic = (x, y) ->
	###
	Absolutely nothing special here. Maybe later versions will be Newtonian or
	Burnikel / Ziegler _if_ possible...
	###

	return [(q = Math.floor x/y), (r = if x < y then x else x % y)]

start = (new Date).getTime();
calc_value = fibFast(MAXIMUM_JS_FIB_N)
diff = (new Date).getTime() - start;
console.log "[#{calc_value}] took #{diff} ms."
{% endhighlight %}

## Discussion

Questions?
