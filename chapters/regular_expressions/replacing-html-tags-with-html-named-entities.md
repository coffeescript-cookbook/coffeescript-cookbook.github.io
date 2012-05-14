---
layout: recipe
title: Replacing HTML Tags with HTML Named Entities
chapter: Regular Expressions
---
## Problem

You need to replace HTML tags with named entities:

`<br/> => &lt;br/&gt;`

## Solution

{% highlight coffeescript %}
htmlEncode = (str) ->
  str.replace /[&<>"']/g, ($0) ->
    "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";"

htmlEncode('<a href="http://bn.com">Barnes & Noble</a>')
# => '&lt;a href=&quot;http://bn.com&quot;&gt;Barnes &amp; Noble&lt;/a&gt;'
{% endhighlight %}

## Discussion

There are probably better ways to implement the above method.
