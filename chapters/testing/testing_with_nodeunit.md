---
layout: recipe
title: Testing with Nodeunit
chapter: Testing
---
## Problem

You are writing a simple calculator using CoffeeScript and you want to verify it functions as expected.  You decide to use the <a href="https://github.com/caolan/nodeunit" target="_blank">Nodeunit</a> test framework.

## Discussion

Nodeunit is a JavaScript implementation of the xUnit family of Unit Testing libraries, similar libraries are available for Java, Python, Ruby, Smalltalk etc.

When using xUnit family test frameworks, you write tests in a file that describes the expected functionality of the code to be tested.

For example, we expect our calculator will be able to add and subtract and will function correctly with both positive and negative numbers.  Our test is listed below.

{% highlight coffeescript %}

# test/calculator.test.coffee

Calculator = require '../calculator'

exports.CalculatorTest =

    'test can add two positive numbers': (test) ->
        calculator = new Calculator
        result = calculator.add 2, 3
        test.equal(result, 5)
        test.done()

    'test can handle negative number addition': (test) ->
        calculator = new Calculator
        result = calculator.add -10, 5
        test.equal(result,  -5)
        test.done()

    'test can subtract two positive numbers': (test) ->
        calculator = new Calculator
        result = calculator.subtract 10, 6
        test.equal(result, 4)
        test.done()

    'test can handle negative number subtraction': (test) ->
        calculator = new Calculator
        result = calculator.subtract 4, -6
        test.equal(result, 10)
        test.done()

{% endhighlight %}

### Installing Nodeunit

Before you can run your tests, you must install Nodeunit:

First of all create a `package.json` file

{% highlight javascript %}
{
  "name": "calculator",
  "version": "0.0.1",
  "scripts": {
    "test": "./node_modules/.bin/nodeunit test"
  },
  "dependencies": {
    "coffee-script": "~1.4.0",
    "nodeunit": "~0.7.4"
  }
}
{% endhighlight %}

Next from a terminal run.

{% highlight bash %}
$ npm install
{% endhighlight %}

## <span style="color: red;">Running the Tests</span>

It's easy to run the tests from the command-line:

{% highlight bash %}
$ npm test
{% endhighlight %}

The test runner should fail, because we have no calculator.coffee

    suki@Yuzuki:nodeunit_testing (master)$ npm test
    npm WARN package.json calculator@0.0.1 No README.md file found!

    > calculator@0.0.1 test /Users/suki/tmp/nodeunit_testing
    > ./node_modules/.bin/nodeunit test


    /Users/suki/tmp/nodeunit_testing/node_modules/nodeunit/lib/nodeunit.js:72
            if (err) throw err;
                           ^
    Error: ENOENT, stat '/Users/suki/tmp/nodeunit_testing/test'
    npm ERR! Test failed.  See above for more details.
    npm ERR! not ok code 0

Let's create a simple file 

{% highlight coffeescript %}

# calculator.coffee

class Calculator

module.exports = Calculator
{% endhighlight %}

And re-run the test suite.

    suki@Yuzuki:nodeunit_testing (master)$ npm test
    npm WARN package.json calculator@0.0.1 No README.md file found!

    > calculator@0.0.1 test /Users/suki/tmp/nodeunit_testing
    > ./node_modules/.bin/nodeunit test


    calculator.test
    ✖ CalculatorTest - test can add two positive numbers

    TypeError: Object #<Calculator> has no method 'add'
      ...

    ✖ CalculatorTest - test can handle negative number addition

    TypeError: Object #<Calculator> has no method 'add'
      ...

    ✖ CalculatorTest - test can subtract two positive numbers

    TypeError: Object #<Calculator> has no method 'subtract'
      ...

    ✖ CalculatorTest - test can handle negative number subtraction

    TypeError: Object #<Calculator> has no method 'subtract'
      ...


    FAILURES: 4/4 assertions failed (31ms)
    npm ERR! Test failed.  See above for more details.
    npm ERR! not ok code 0


## <span style="color: green;">Getting the Tests to Pass</span>

Let's implement our methods and see if we can get these tests to pass.

{% highlight coffeescript %}

# calculator.coffee

class Calculator

  add: (a, b) ->
    a + b

  subtract: (a, b) ->
    a - b

module.exports = Calculator
{% endhighlight %}

When we rerun the tests we see they're all passing:

    suki@Yuzuki:nodeunit_testing (master)$ npm test
    npm WARN package.json calculator@0.0.1 No README.md file found!

    > calculator@0.0.1 test /Users/suki/tmp/nodeunit_testing
    > ./node_modules/.bin/nodeunit test


    calculator.test
    ✔ CalculatorTest - test can add two positive numbers
    ✔ CalculatorTest - test can handle negative number addition
    ✔ CalculatorTest - test can subtract two positive numbers
    ✔ CalculatorTest - test can handle negative number subtraction

    OK: 4 assertions (27ms)


## <span style="color: green;">Refactoring the Tests</span>

Now that our tests pass, we should look to see if our code or our test(s) can be refactored.

In our test file, each test creates its own calculator instance.  This can make our tests quite repetitive especially for larger test suites.  Ideally, we should consider moving that initialization code into a routine that runs before each test.  

In common with other xUnit libraries, Nodeunit provides a setUp (and tearDown) function which will be called before each test.

{% highlight coffeescript %}

Calculator = require '../calculator'

exports.CalculatorTest =

    setUp: (callback) ->
        @calculator = new Calculator
        callback()

    'test can add two positive numbers': (test) ->
        result = @calculator.add 2, 3
        test.equal(result, 5)
        test.done()

    'test can handle negative number addition': (test) ->
        result = @calculator.add -10, 5
        test.equal(result,  -5)
        test.done()

    'test can subtract two positive numbers': (test) ->
        result = @calculator.subtract 10, 6
        test.equal(result, 4)
        test.done()

    'test can handle negative number subtraction': (test) ->
        result = @calculator.subtract 4, -6
        test.equal(result, 10)
        test.done()

{% endhighlight %}

We can rerun the tests and everything should continue to pass.
