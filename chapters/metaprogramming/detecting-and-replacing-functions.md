---
layout: recipe
title: Detecting and Creating Missing Functions
chapter: Metaprogramming
---
## Problem

You want to detect if a function exists and create it if it does not (such as an ECMAScript 5 function in Internet Explorer 8).

## Solution

Use the existential assignment operator (`?=`) to assign a function to the classes' prototype (using the `::` shorthand), and wrap it all in a IIFE (`do ->`) to contain the variables.

{% highlight coffeescript %}
do -> Array::filter ?= (callback) ->
  element for element in this when callback element

array = [1..10]

array.filter (x) -> x > 5
# => [6,7,8,9,10]
{% endhighlight %}

## Discussion

Objects in JavaScript (and thus, in CoffeeScript) have a prototype member that defines what member functions should be available on all objects based on that prototype.  
In Coffeescript, you access this prototype using the `::` shortcut. So, if you want to add a filter function to the array class, you do `Array::filter = ...`. This will add the filter function to all arrays.

However, we don't ever want to overwrite a prototype that we haven't created in the first place. For example, if `Array::filter` already exists in a fast native form in the browser, or a library maker has their own specific version of `Array::filter`, then you'll either replace the quick native version with a slow Javascript version, or you will break the library that depends on their own Array::shuffle.  
What you need to do is only add the function if it doesn't already exist. That's where the existential assignment operator (`?=`) comes in. If we do `Array::filter ?= ...` instead, it will see if `Array::filter` already exists. If it does, then it will use the current version. If it doesn't, it will add yours.

Finally, because the existential assignment operator--when compiled--creates a few variables, we clean up the code by wrapping it in an [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/). This hides those internal-use-only variables from leaking outside. So, if the function we're writing already exists, it runs, does basically nothing, and exits, affecting absolutely none of your code. But, if the function we're writing *doesn't* exist, we send out only the function we're writing as a closure, so only the function you've made affects the code. The internal workings of `?=` are hidden either way.

### Example

Below, we've compiled and annotated the coffeescript written in the solution above

{% highlight javascript %}
// (function(){ ... })() is an IIFE, compiled in thanks to `do ->`
(function() {

  // This is from the `?=` operator, used to check if Array.prototype.filter (`Array::filter`) exists.
  // If it does, we set it to itself, and return. If it doesn't, then we set it to the function, and return the function.
  // The IIFE is only used to hide _base and _ref from the outside world.
  var _base, _ref;
  return (_ref = (_base = Array.prototype).filter) != null ? _ref : _base.filter = function(callback) {

    // `element for element in this when callback element`
    var element, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      element = this[_i];
      if (callback(element)) {
        _results.push(element);
      }
    }
    return _results;
    
  };
// The end of the IIFE from `do ->`
})();
{% endhighlight %}
