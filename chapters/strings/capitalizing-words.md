---
layout: recipe
title: Capitalizing Words
chapter: Strings
---
## Problem

You want to capitalize the first letter of every word in a string.

## Solution

Use the split, map, join pattern: Split the string into words, then use a map to capitalize the first letter and lowercase all other letters of each word before gluing the string back together with join.

{% highlight coffeescript %}
("foo bar baz".split(' ').map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '
# => 'Foo Bar Baz'
{% endhighlight %}

Or do the same thing using a list comprehension:

{% highlight coffeescript %}
(word[0].toUpperCase() + word[1..-1].toLowerCase() for word in "foo   bar   baz".split /\s+/).join ' '
# => 'Foo Bar Baz'
{% endhighlight %}

## Discussion

Split, map, join is a common scripting pattern dating back to Perl. This function may benefit from being placed directly onto the String class by [Extending Classes]({{ site.baseurl }}/chapters/objects/extending-classes).

Be aware that two wrinkles can appear in the split, map, join pattern. The first is that the split text works best when it is constant. If the source string has multiple spaces in it, the split will need to take this into account to prevent getting extra, empty words. One way to do this is with a regular expression to split on runs of whitespace instead of a single space:

{% highlight coffeescript %}
("foo    bar    baz".split(/\s+/).map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '
# => 'Foo Bar Baz'
{% endhighlight %}

...but this leads us to the second wrinkle: notice that the runs of whitespace are now compressed down to a single character by the join.

Quite often one or both of these wrinkles is acceptable, however, so the split, map, join pattern can be a powerful tool.
