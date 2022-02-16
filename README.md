# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aiefymenko/lotide`

**Require it:**

`const _ = require('@aiefymenko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: This function for arrays is to retrieve the first element from the array.
* `function2(tail)`: This function for arrays is to retrieve every element but the first from the array.
* `function3(middle)`: This function returns an array with only the middle element(s) of the provided array.
* `function4(assertArraysEqual)`: This function will help us easily test functions that return arrays.
* `function5(assertEqual)`: This function will help us easily test functions.
* `function6(assertObjectsEqual)`: This function will help us easily test functions that return objects.
* `function7(countLetters)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function8(countOnly)`: This function should take in a collection of items and return counts for a specific subset of those items.
* `function9(eqArrays)`: This functions will compare 2 arrays and return true/false if they are equal/!equal.
* `function10(eqObjects)`: This functions will compare 2 objects and return true/false if they are equal/!equal.
* `function11(findKey)`: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `function12(findKeyByValue)`: This function will help us search for a key on an object where its value matches a given value.
* `function13(flatten)`: This function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `function14(letterPositions)`: This function will return all the indices (zero-based positions) in the string where each character is found.
* `function15(map)`: This function will return a new array based on the results of the callback function.
* `function17(takeUntil)`: This function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `function17(without)`: This function will return a subset of a given array, removing unwanted elements.
