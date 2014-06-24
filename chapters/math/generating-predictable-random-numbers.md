---
layout: recipe
title: Generating Predictable Random Numbers
chapter: Math
---
## Problem

You need to generate a random number in a certain range, but you also need to be able to "seed" the generator to deliver predictable values.

## Solution

Write your own random number generator. There are a LOT of ways to do this. Here's a simple one. _This generator is +ABSOLUTELY NOT+ acceptable for cryptographic purposes!_

{% highlight coffeescript %}
class Rand
  # if created without a seed, uses current time as seed
  constructor: (@seed) ->
    # Knuth and Lewis' improvements to Park and Miller's LCPRNG
    @multiplier = 1664525
    @modulo = 4294967296 # 2**32-1;
    @offset = 1013904223
    unless @seed? && 0 <= seed < @modulo
      @seed = (new Date().valueOf() * new Date().getMilliseconds()) % @modulo

  # sets new seed value
  seed: (seed) ->
    @seed = seed

  # return a random integer 0 <= n < @modulo
  randn: ->
    # new_seed = (a * seed + c) % m
    @seed = (@multiplier*@seed + @offset) % @modulo

 # return a random float 0 <= f < 1.0
  randf: ->
    this.randn() / @modulo

  # return a random int 0 <= f < n
  rand: (n) ->
    Math.floor(this.randf() * n)

  # return a random int min <= f < max
  rand2: (min, max) ->
    min + this.rand(max-min)
{% endhighlight %}

## Discussion

JavaScript and CoffeeScript do not provide a seedable random number generator. Writing your own will be an exercise in trading off the amount of randomness with the simplicity of the generator. A full discussion of randomness is beyond the scope of this cookbook; for further reading consult Donald Knuth's _The Art of Computer Programming_, Volume II, Chapter 3, "Random Numbers", and _Numerical Recipes in C_, 2nd Edition, Chapter 7, "Random Numbers".

A brief explanation of this random number generator is in order, however. It is a Linear Congruential Pseudorandom Number Generator. LCPRNG's operate on the mathematical formula `I<sub>j+1</sub> = (aI<sub>j</sub>+c) % m`, where a is the multiplier, c is the addition offset, and m is the modulus.
 Each time a random number is requested, a very large multiplication and addition are performed -- "very large" relative to the key space -- and the resulting number is modulused back down into the keyspace.

This generator has a period of 2<sup>32</sup>. It is absolutely unacceptable for cryptographic purposes, but for most simple randomness requirements it is quite adequate. `randn()` will traverse the entire keyspace before repeating itself, and the next number is determined by the previous one.

If you want to tinker with this generator, you are _strongly_ encouraged to read Chapter 3 of Knuth's _The Art of Computer Programming_. Random number generation is VERY easy to screw up, and Knuth explains how to tell a good RNG from a bad one.

Avoid the temptation to modulus the output of this generator. If you need an integer range, use division. Linear Congruential generators are very nonrandom in their lower bits. This one in particular always generates an odd number from an even seed, and vice versa. So if you need a random 0 or 1, do NOT use

{% highlight coffeescript %}
# NOT random! Do not do this!
r.randn() % 2
{% endhighlight %}

because you will most definitely not get random digits. Use `r.rand(2)` instead.
