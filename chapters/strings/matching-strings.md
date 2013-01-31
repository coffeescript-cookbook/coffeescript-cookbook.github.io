---
layout:   recipe
title:    Matching Strings
chapter:  Strings
---
## Problem

You want to match two or more strings.

## Solution

Calculate the edit distance, or number of operations required to transform one string into the other.

{% highlight coffeescript %}

  levenshtein = (str1, str2) ->
    
    l1 = str1.length
    l2 = str2.length
    prevDist = [0..l2]
    nextDist = [0..l2]

    for i in [1..l1] by 1
      nextDist[0] = i
      for j in [1..l2] by 1
        if (str1.charAt i-1) == (str2.charAt j-1)
          nextDist[j] = prevDist[j-1]
        else
          nextDist[j] = 1 + Math.min prevDist[j], nextDist[j-1], prevDist[j-1]
        [prevDist,nextDist]=[nextDist, prevDist]
    
    prevDist[l2]

{% endhighlight %}

## Discussion

You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm.

This version of Levenshtein algorithm is linear in memory, quadratic in time.

str.charAt i is preferred here to str[i] because the latter syntax is not supported by some browsers (e.g. IE7).

At first glance the use of "by 1" in the two loops might look useless. It is actually here to avoid a common danger 
of the coffeescript [i..j] syntax. If str1 or str2 is an empty string, then [1..l1] or [1..l2] will return [1,0].
The loops with the "by 1" statement also compiles to cleaner / slightly more performant javascript.

Finally the optimization of recycling of arrays at the end of the loops is mainly here to
demonstrate the syntax of coffeescript for swapping two variables.
