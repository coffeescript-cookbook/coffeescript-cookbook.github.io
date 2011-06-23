---
layout: recipe
title: Builder Pattern
chapter: Design Patterns
---
## Problem

You need to prepare a complicated, multi-part object, but you expect to do it more than once or with varying configurations.

## Solution

Create a Builder to encapsulate the object production process.

The [Todo.txt](http://todotxt.com) format provides an advanced but still plain-text method for maintaining lists of to-do items.  Typing out each item by hand would provide exhausting and error-prone, however, so a TodoTxtBuilder class could save us the trouble:

{% highlight coffeescript %}
class TodoTxtBuilder
    constructor: (defaultParameters={ }) ->
        @date = new Date(defaultParameters.date) or new Date
        @contexts = defaultParameters.contexts or [ ]
        @projects = defaultParameters.projects or [ ]
        @priority =  defaultParameters.priority or undefined
    newTodo: (description, parameters={ }) ->
        date = (parameters.date and new Date(parameters.date)) or @date
        contexts = @contexts.concat(parameters.contexts or [ ])
        projects = @projects.concat(parameters.projects or [ ])
        priorityLevel = parameters.priority or @priority
        createdAt = [date.getFullYear(), date.getMonth()+1, date.getDate()].join("-")
        contextNames = ("@#{context}" for context in contexts when context).join(" ")
        projectNames = ("+#{project}" for project in projects when project).join(" ")
        priority = if priorityLevel then "(#{priorityLevel})" else ""
        todoParts = [priority, createdAt, description, contextNames, projectNames]
        (part for part in todoParts when part.length > 0).join " "

builder = new TodoTxtBuilder(date: "10/13/2011")

builder.newTodo "Wash laundry"

# => '2011-10-13 Wash laundry'

workBuilder = new TodoTxtBuilder(date: "10/13/2011", contexts: ["work"])

workBuilder.newTodo "Show the new design pattern to Lucy", contexts: ["desk", "xpSession"]

# => '2011-10-13 Show the new design pattern to Lucy @work @desk @xpSession'

workBuilder.newTodo "Remind Sean about the failing unit tests", contexts: ["meeting"], projects: ["compilerRefactor"], priority: 'A'

# => '(A) 2011-10-13 Remind Sean about the failing unit tests @work @meeting +compilerRefactor'

{% endhighlight %}

## Discussion

The TodoTxtBuilder class takes care of all the heavy lifting of text generation and lets the programmer focus on the unique elements of each to-do item.  Additionally, a command line tool or GUI could plug into this code and still retain support for later, more advanced versions of the format with ease.

### Pre-Construction

Instead of creating a new instance of the needed object from scratch every time, we shift the burden to a separate object that we can then tweak during the object creation process.

{% highlight coffeescript %}
builder = new TodoTxtBuilder(date: "10/13/2011")

builder.newTodo "Order new netbook"

# => '2011-10-13 Order new netbook'

builder.projects.push "summerVacation"

builder.newTodo "Buy suntan lotion"

# => '2011-10-13 Buy suntan lotion +summerVacation'

builder.contexts.push "phone"

builder.newTodo "Order tickets"

# => '2011-10-13 Order tickets @phone +summerVacation'

delete builder.contexts[0]

builder.newTodo "Fill gas tank"

# => '2011-10-13 Fill gas tank +summerVacation'
{% endhighlight %}

### Exercises

* Expand the project- and context-tag generation code to filter out duplicate entries.
* Some Todo.txt users like to insert project and context tags inside the description of their to-do items.  Add code to identify these tags and filter them out of the end tags.
