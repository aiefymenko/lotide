const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = (array) => {
  let flattened = [];
  for (const elem of array) {
    if (!Array.isArray(elem)) {
      flattened.push(elem);
    } else {
      for (const arrElem of elem) {
        flattened.push(arrElem);
      }
    }

  }
  return flattened;
};

module.exports = flatten;


