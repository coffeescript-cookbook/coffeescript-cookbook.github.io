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

Levenshtein =
  (str1, str2) ->
         
    l1 = str1.length
    l2 = str2.length

    Math.max l1, l2 if Math.min l1, l2 == 0      

    i = 0; j = 0; distance = []

    for i in [0...l1 + 1]
     distance[i] = []
     distance[i][0] = i

    distance[0][j] = j for j in [0...l2 + 1]

    for i in [1...l1 + 1]
     for j in [1...l2 + 1]
       distance[i][j] = Math.min distance[i - 1][j] + 1,
         distance[i][j - 1] + 1,                         
         distance[i - 1][j - 1] + 
           if (str1.charAt i - 1) == (str2.charAt j - 1) then 0 else 1

    distance[l1][l2]
    
{% endhighlight %}

## Discussion

You can use either Hirschberg or Wagner–Fischer's algorithm to calculate a Levenshtein distance. This example uses Wagner–Fischer's algorithm.
