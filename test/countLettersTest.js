const eqObjects = require('../eqObjects');
const eqArrays = require('../eqArrays');
const assertObjectsEqual = require('../assertObjectsEqual');
const countLetters = require('../countLetters');

// Test code
assertObjectsEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });