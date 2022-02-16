const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = (sentence) => {
  const obj = {};
  for (let element of sentence) {
    if (element !== ' ') {
      if (obj[element]) {
        obj[element] += 1;
      } else {
        obj[element] = 1;
      }
    }
  } return obj;

};

module.exports = countLetters;
