---
layout: recipe
title: Testing Every Element
chapter: Arrays
---
## Problem

You want to be able to check that every element in an array meets a particular condition.

## Solution

Use Array.every (ECMAScript 5):

{% highlight coffeescript %}
evens = (x for x in [0..10] by 2)

evens.every (x)-> x % 2 == 0
# => true
{% endhighlight %}

Array.every was added to Mozilla's Javascript 1.6 and made standard with ECMAScript 5. If you to support browsers that do not implement EC5 then check out [`_.all` from underscore.js][underscore].

For a real world example, pretend you have a multiple select list that looks like:

{% highlight html %}
<select multiple id="my-select-list">
  <option>1</option>
  <option>2</option>
  <option>Red Car</option>
  <option>Blue Car</option>
</select>
{% endhighlight %}

Now you want to verify that the user selected only numbers. Let's use Array.every:

{% highlight coffeescript %}
validateNumeric = (item)->
  parseFloat(item) == parseInt(item) && !isNaN(item)

values = $("#my-select-list").val()

values.every validateNumeric
{% endhighlight %}

## Discussion

This is similar to using ruby's Array#all? method.

[underscore]: http://documentcloud.github.com/underscore/
