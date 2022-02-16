const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = (sentence) => {
  const obj = {}; //desired output as object
  for (let element of sentence) { //looping through every element of our string
    if (element !== ' ') { // if it's not equal to space
      if (obj[element]) { //we are checking if our object has the key from the loop
        obj[element] += 1; // if it is we are adding the value +1
      } else {
        obj[element] = 1; //if it's not we are creating a key with a value =1
      }
    }
  } return obj;

};

module.exports = countLetters;
