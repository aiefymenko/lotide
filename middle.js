const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = (array) => {
  const midIndex = Math.floor(array.length / 2);
  for (const elem of array) {
    return (array.length <= 2) ? []
      : (array.length % 2 !== 0) ? [array[midIndex]]
        : [array[midIndex - 1], array[midIndex]];
  }
};

module.exports = middle;

