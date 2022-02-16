const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual([1,2,5,7,2], results1);
assertArraysEqual(['I\'ve', 'been', 'to', 'Hollywood'], results2);