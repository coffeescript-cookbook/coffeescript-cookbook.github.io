---
layout: recipe
title: Searching for Substrings
chapter: Regular Expressions
---
## Problem

You need to search for a substring, and return either the starting position of the match or the matching value itself.

## Solution

There are several ways to accomplish this using regular expressions. Some methods are called on a `RegExp` pattern or object and some are called on `String` objects.

### `RegExp` objects

The first way is to call the `test` method on a `RegExp` pattern or object. The `test` method returns a boolean value:

{% highlight coffeescript %}
match = /sample/.test("Sample text")
# => false

match = /sample/i.test("Sample text")
# => true
{% endhighlight %}

The next way to is to call the `exec` method on a `RegExp` pattern or object. The `exec` method returns an array with the match information or `null`:

{% highlight coffeescript %}
match = /s(amp)le/i.exec "Sample text"
# => [ 'Sample', 'amp', index: 0, input: 'Sample text' ]

match = /s(amp)le/.exec "Sample text"
# => null
{% endhighlight %}

### `String` objects

The `match` method matches a given string with the `RegExp`. With 'g' flag returns an array containing the matches, without 'g' flag returns just the first match or if no match is found returns `null`.

{% highlight coffeescript %}
"Watch out for the rock!".match(/r?or?/g)
# => [ 'o', 'or', 'ro' ]

"Watch out for the rock!".match(/r?or?/)
# => [ 'o', index: 6, input: 'Watch out for the rock!' ]

"Watch out for the rock!".match(/ror/)
# => null
{% endhighlight %}

The `search` method matches `RegExp` with string and returns the index of the beginning of the match if found, -1 if not.

{% highlight coffeescript %}
"Watch out for the rock!".search /for/
# => 10

"Watch out for the rock!".search /rof/
# => -1
{% endhighlight %}

## Discussion

Regular Expressions are a powerful way to test and match substrings.
