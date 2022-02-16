const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  let modifiedArr = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      modifiedArr.push(element);
    }
  }
  return modifiedArr;
};
module.exports = without;