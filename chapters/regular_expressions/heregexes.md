---
layout: recipe
title: Using Heregexes
chapter: Regular Expressions
---
## Problem

You need to write a complex regular expression.

## Solution

Use Coffeescript's "heregexes" -- extended regular expressions that ignore internal whitespace and can contain comments.

{% highlight coffeescript %}
pattern = ///
  ^\(?(\d{3})\)? # Capture area code, ignore optional parens
  [-\s]?(\d{3})  # Capture prefix, ignore optional dash or space
  -?(\d{4})      # Capture line-number, ignore optional dash
///
[area_code, prefix, line] = "(555)123-4567".match(pattern)[1..3]
# => ['555', '123', '4567']
{% endhighlight %}

## Discussion

Breaking up your complex regular expressions and commenting key sections makes them a lot more decipherable and maintainable. For example, changing this regex to allow an optional space between the prefix and line number would now be fairly obvious.

### Whitespace characters in heregexes

Whitespace is ignored in heregexes -- so what do you do if you need to match a literal ASCII space?

One solution is to use the @\s@ character class, which will match spaces, tabs
and line breaks. If you only want to match a space, though, you'll need to use
`\x20` to denote a literal ASCII space.
