---
layout: default
title: Author's Guide
---
# Author's Guide

## tl;dr: Look at Other Recipes, and Blend In

Look at the source of other recipe pages and follow that page structure. Start with the [Developer's Guide]({{ site.baseurl }}/developers-guide) to get a test version of the cookbook up and running on your machine, and get to work!

## General Guidelines

* Feel free to add new pages, or even chapters. Just keep them organized. _(See "How to Add a Chapter" below)_
* Try to write well-styled, idiomatic CoffeeScript.
* Try to stay within the Problem/Solution/Discussion format. If you can't think of a good problem for your recipe... hang onto it for a while.
* Sharing code that you think might only be used rarely is fine. Sharing esoteric code tricks is less so. There's a difference between sharing a translator for an obscure format and sharing a weird bit-shifting trick that does fast but inaccurate multiplication.
* Don't forget to add your name to the authors page!

## Use Cookbook Problem/Solution/Discussion Format

A typical cookbook page will have three sections (four if you count the title):

* **Problem** A one- or two-sentence description of the problem, such as "You want to access parts of a string" or "You want to format a floating point number as currency, with a leading dollar sign, two digits of precision and comma-separated triples." Where possible, phrase the problem as though speaking directly to the reader: "You want to...", "You have an X but you want a Y", etc.
* **Solution** State the solution as briefly as possible, ideally as a single sentence that identifies the strategy you would use, and give example code. It's tempting to explain the solution, but don't do it yet. Remember that the reader will look this solution up many times after the first time, and that they will be looking for a quick reference each time. You're going to explain the solution in the **Discussion**, and the first time reader will read your solution, think about it, and then proceed to the discussion if necessary. For example, for "accessing parts of a string", a good Solution sentence might be "Use CoffeeScript's array range subscripts, or JavaScript's slice function."
* **Discussion** Here you should explain why your solution works, or give further examples such as edge cases. If your solution can break on some edge cases, be sure to note them here. For example, if a percentage function crashes when given a zero, you could note this in the discussion and give a workaround. NOTE: If your solution has really dangerous edge cases, so dangerous that you would include them in the solution, please consider whether your recipe should be included at all. Remember, this Cookbook is for good code!

## Copyright Issues

Do not post code that is copyrighted by another user, unless you have permission to use that code AND to relicense that code under the [CC BY 3.0]({{ site.baseurl }}/license) license. If you DO have permission and the author would like credit, please add them to the [authors]({{ site.baseurl }}/authors) page.

Also, just a stylistic note, please do not yank code directly from [http://coffeescript.org/](http://coffeescript.org/) and post it with little or no discussion. The CoffeeScript Cookbook is not affiliated with them. We think they're awesome and want them to like us, too! Make sure that anything taken from [http://coffeescript.org/](http://coffeescript.org/) is permissible use and that it stands alone as a valid recipe. If the recipe is too terse, consider adding more examples and discussion.

## Tag the page with Jekyll frontmatter

...that's a lot of fancy words that mean "don't forget to put the layout, chapter and page title at the top of the file in a YAML block". For example, the string interpolation page begins with

{% highlight text %}
---
layout: recipe
title: String Interpolation
chapter: Strings
---
{% endhighlight %}

## Use Liquid highlighting templates

Turn on syntax highlighting for CoffeeScript with `highlight coffeescript`.

test2

&lbrace;% highlight coffeescript %&rbrace;
&#35; Calculate the square of a number
square = (x) -> x * x

square(16)
&#35; => 256
&lbrace;% endhighlight %&rbrace;

This produces the following:

{% highlight coffeescript %}
# Calculate the square of a number
square = (x) -> x * x

square(16)
# => 256
{% endhighlight %}

## Include Output

After writing an important expression, show the reader what the output would be by adding it with a `# =>` on the following line. Once we get automated script testing working up in this joint, we'll actually load up your recipe snippets and evaluate its expressions against the output comment you wrote. (In other words, `# =>` tells the reader what the output will be, but it tells automated checker what the assertEquals should be)

{% highlight coffeescript %}
# right
[1,2,3].map (x) -> x * 2
# => [ 2, 4, 6 ]

# very wrong!
[1,2,3].map (x) -> x * 2

# right; only add for important/results statements
evens = x for x in [0..10] by 2
evens.some (x) -> x == 6
# => true

# less wrong; may require tweaking the automatic checker
[1,2,3].map (x) -> x * 2 # => [ 2, 4, 6 ]

# less wrong (possibly not wrong at all--the output merely does not match what the coffee interpreter renders)
[1,2,3].map (x) -> x * 2
# => [2,4,6]
{% endhighlight %}

Not all snippets evaluate to something useful. For example, array.forEach has side effects but does not return anything. Also, the console.log() and alert() commands are also side-effect-only commands that return nothing. When possible, try to have your snippets evaluate to something inspectable, and leave displaying to the console or browser out of it. (Unless your snippet is _about_ displaying to the console or browser.)

When in doubt about what output to show, try evaluating your snippet in the coffee interpreter and see what IT thinks. Ideally your output should match, or at least be machine-comparable.

# Grindy HOWTOs

## How to Add a Recipe

Create a new markdown page (or copy the [Recipe Template]({{ site.baseurl }}/recipe-template). The filename should be about the problem, e.g. `finding-last-day-of-the-month.md` or `reversing-arrays.md`. In your file, start with the following template:

{% highlight text %}
---
layout: recipe
title: Title of The Recipe
chapter: Chapter Name
---

## Problem

You have a problem.

## Solution

Do this about it.

## Discussion

Here's why.
{% endhighlight %}

One fussy little bit, the chapter name should match the directory the chapter is in, otherwise the page won't render correctly. For example, if you're writing a recipe for arrays, make sure the chapter is "Arrays", not "arrays" or "aray" ...or especially not "Chapter Name".

## How to Add a Chapter

* Open chapters/index.html and your chapter's name to the yaml list of chapters.
* cd into chapters/ and create the directory for the chapter name. Downcase the name and replace spaces with underscores.
* add an index.html file that uses `layout: chapter`. For convenience, just copy the index.html from another chapter and update the yaml frontmatter to reflect the name of your new chapter.

For example, to add a chapter called "Dates and Times", you would add it to the chapters array:

{% highlight yaml %}
chapters:
- Syntax
- Objects
- Arrays
- Dates and Times
{% endhighlight %}

...and then create that chapter in the file system:

{% highlight bash %}
cd chapters
mkdir dates_and_times
{% endhighlight %}

Now create a new page in that chapter (remember to add its YAML front matter) and once jekyll regenerates the chapter index, your new page should appear.

# FAQ

## I Have a Weird Recipe. Should I Share It?

Maybe! The real question is, is it really useful, or is it just clever? If you have a formatter for a weird Albanian GIS format, that's a real problem that almost nobody would ever have -- but when somebody DOES have that problem, they REALLY need a solution. If you have a bit shifting trick that can swap two numbers using three xor-equals operations, that's a really clever solution but it's not very good CoffeeScript. (For one thing, `x ^= y ^= x ^= y` is not idiomatic, while `[x,y]=[y,x]` is. For another, there's a bug in that code. And once you fix it, there's another bug caused by extrapolating this register trick to a reference-based language where -- look, it's just a bad idea, okay?)

If you have a cool but weird recipe, ask yourself if a reader would genuinely find it useful. Here are two very good questions to consider:

* Does it really solve a problem that an actual person might have?
* If somebody really does have that problem, would your recipe really be the best solution?

If the answer to either question is no, you might have some code that is a "clever solution in search of a problem". If in doubt, ask.

## What If My Recipe is Inefficient/Too Big/Too Slow?

If it solves a problem to which the alternative is to _not_ solve the problem, share it. Let the reader decide if they want to use it. Sometimes we want tight efficient code, other times we want a robust feature set. If the code has abysmal performance characteristics, be sure to warn the reader in the Discussion.

## Can I Edit An Existing Recipe?

Yes. Please improve anything and everything! Be sure to test your changes and make sure that your solution really is better.

## I Have a Really Efficient Solution, But It's Not As Readable As the Existing Recipe. Should I Add It?

See the "Weird Recipe" note above. Do real people in the real world ever hit the performance constraint? If so, then by all means, add your strategy to the existing solution, and be sure to explain why your solution is not idiomatic. If a reader really has that problem, they'll be glad for the extra options.

## I Have A Problem/Solution, But It's Basically Just JavaScript. Should I Add It?

Yes! CoffeeScript compiles to JavaScript, and that means that some of its functionality comes straight from JavaScript. (For example, see [Reversing Arrays]({{ site.baseurl }}/chapters/arrays/reversing-arrays).) But if you're programming in CoffeeScript and you need to reverse an array, this Cookbook should stand ready to tell you it's available to you in CoffeeScript -- even if it's just a straight call into a JavaScript library.

## I Found a Typo. Is That Enough of a Fix? Does That Count?

Absolutely!
