---
layout: recipe
title: Shuffling Array Elements
chapter: Arrays
---
## Problem

You want to shuffle the elements in an array.

## Solution

The [Fisher-Yates shuffle] is a highly efficient and completely unbiased way to randomize
the elements in an array. It's a fairly simple method: Start at the end of the list, and
swap the last element with a random element from earlier in the list. Go down one and 
repeat, until you're at the beginning of the list, with all of the shuffled elements 
at the end of the list. This [Fisher-Yates shuffle Visualization] may help you understand
the algorithm.

{% highlight coffeescript %}
shuffle = (source) ->
  # Arrays with < 2 elements do not shuffle well. Instead make it a noop.
  return source unless source.length >= 2
  # From the end of the list to the beginning, pick element `index`.
  for index in [source.length-1..1]
    # Choose random element `randomIndex` to the front of `index` to swap with.
    randomIndex = Math.floor Math.random() * (index + 1)
    # Swap `randomIndex` with `index`, using destructured assignment
    [source[index], source[randomIndex]] = [source[randomIndex], source[index]]
  source

shuffle([1..9])
# => [ 3, 1, 5, 6, 4, 8, 2, 9, 7 ]
{% endhighlight %}

[Fisher-Yates shuffle]: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
[Fisher-Yates Shuffle Visualization]: http://bost.ocks.org/mike/shuffle/

## Discussion

### The Wrong Way to do it

There is a common--but terribly wrong way--to shuffle an array, by sorting by a random
number.

{% highlight coffeescript %}
shuffle = (a) -> a.sort -> 0.5 - Math.random()
{% endhighlight %}

If you do a sort randomly, it should give you a random order, right? Even [Microsoft used 
this random-sort algorithm][msftshuffle]. Turns out, [this random-sort algorithm produces
biased results][naive], because it only has the illusion of shuffling. Randomly sorting
will not result in a neat, tidy shuffle; it will result in a wild mass of inconsistent
sorting.

[msftshuffle]: http://www.robweir.com/blog/2010/02/microsoft-random-browser-ballot.html
[naive]: http://www.codinghorror.com/blog/2007/12/the-danger-of-naivete.html

### Optimizing for speed and space

The solution above isn't as fast, or as lean, as it can be. The list comprehension, when
transformed into Javascript, is far more complex than it needs to be, and the
destructured assignment is far slower than dealing with bare variables. The following
code is less idiomatic, and takes up more source-code space... but will compile down
smaller and run a bit faster:

{% highlight coffeescript %}
shuffle = (a) ->
  i = a.length
  while --i > 0
    j = ~~(Math.random() * (i + 1)) # ~~ is a common optimization for Math.floor
    t = a[j]
    a[j] = a[i]
    a[i] = t
  a
{% endhighlight %}

### Extending Javascript to include this shuffle.

The following code adds the shuffle function to the Array prototype, which means that
you are able to run it on any array you wish, in a much more direct manner.

{% highlight coffeescript %}
Array::shuffle ?= ->
  if @length > 1 then for i in [@length-1..1]
    j = Math.floor Math.random() * (i + 1)
    [@[i], @[j]] = [@[j], @[i]]
  this

[1..9].shuffle()
# => [ 3, 1, 5, 6, 4, 8, 2, 9, 7 ]
{% endhighlight %}

**Note:** Although it's quite common in languages like Ruby, extending native objects is 
often considered bad practice in JavaScript (see: [Maintainable JavaScript: Don’t modify 
objects you don’t own][dontown]; [Extending built-in native objects. Evil or not?]
[extendevil]). That being said, the code above is really quite safe to add. It only adds
`Array::shuffle` if it doesn't exist already, thanks to the existential assignment 
operator (`?=`). That way, we don't overwrite someone else's, or a native browser method.

Also, if you think you'll be using a lot of these utility functions, consider using a
utility library, like [Lo-dash](http://lodash.com/)^†. They include a lot of nifty
features, like maps and forEach, in a cross-browser, lean, high-performance way. 

^† [Underscore](http://underscorejs.org/) is also a good alternative to Lo-dash.

[dontown]: http://www.nczonline.net/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/
[extendevil]: http://perfectionkills.com/extending-built-in-native-objects-evil-or-not/
