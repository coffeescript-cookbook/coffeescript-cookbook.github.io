---
layout: recipe
title: Strategy Pattern
chapter: Design Patterns
---
## Problem

You have more than one way to solve a problem but you need to choose (or even switch) between these methods at run time.

## Solution

Encapsulate your algorithms inside of Strategy objects.

Given an unsorted list, for example, we can change the sorting algorithm under different circumstances.

###The base class:

{% highlight coffeescript %}
StringSorter = (algorithm) ->
    sort: (list) -> algorithm list
{% endhighlight %}

###The strategies:

{% highlight coffeescript %}
bubbleSort = (list) ->
    anySwaps = false
    swapPass = ->
        for r in [0..list.length-2]
            if list[r] > list[r+1]
                anySwaps = true
                [list[r], list[r+1]] = [list[r+1], list[r]]

    swapPass()
    while anySwaps
        anySwaps = false
        swapPass()
    list

reverseBubbleSort = (list) ->
    anySwaps = false
    swapPass = ->
        for r in [list.length-1..1]
            if list[r] < list[r-1]
                anySwaps = true
                [list[r], list[r-1]] = [list[r-1], list[r]]

    swapPass()
    while anySwaps
        anySwaps = false
        swapPass()
    list
{% endhighlight %}

###Using the strategies:

{% highlight coffeescript %}
sorter = new StringSorter bubbleSort

unsortedList = ['e', 'b', 'd', 'c', 'x', 'a']

sorter.sort unsortedList

# => ['a', 'b', 'c', 'd', 'e', 'x']

unsortedList.push 'w'

# => ['a', 'b', 'c', 'd', 'e', 'x', 'w']

sorter.algorithm = reverseBubbleSort

sorter.sort unsortedList

# => ['a', 'b', 'c', 'd', 'e', 'w', 'x']
{% endhighlight %}

## Discussion

"No plan survives first contact with the enemy", nor users, but we can use the knowledge gained from changing circumstances to adapt.  Near the end of the example, for instance, the newest item in the array now lies out of order.  Knowing that detail, we can then speed the sort up by switching to an algorithm optimized for that exact scenario with nothing but a simple reassignment.

### Exercises

* Expand `StringSorter` into an `AlwaysSortedArray` class that implements all of the functionality of a regular array but which automatically sorts new items based on the method of insertion (e.g. `push` vs. `shift`).
