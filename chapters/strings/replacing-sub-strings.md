---
layout: recipe
title: Replacing Sub-Strings Within a String
chapter: Strings
---
## Problem

You want to replace a sub-string with a new sub-string.

## Solution

Split the string using the sub-string you want to remove as a delimiter. Then re-join using the new sub-string as the delimiter.

{% highlight coffeescript %}
"Orange is the new Black".split("Orange").join("Pink")
# => "Pink is the new Black"

"I am so sad. I cannot believe how sad I am today!".split("sad").join("happy")
# => "I am so happy. I cannot believe how happy I am today!"

"I am not a crook.".split("not ").join("")
# => "I am a crook."
{% endhighlight %}

## Discussion

You can also use regexes. If you're matching an exact string, this way is simpler and 10x faster.
 
If you use regexes, remember that you must escape certain characters. 
