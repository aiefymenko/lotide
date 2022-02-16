const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {}; //our desired output as object
  for (let i = 0; i < sentence.length; i++) { //looping thought our string
    if (sentence[i] !== ' ') { //checking if any element of the sting is not equal to space
      if (!results[sentence[i]]) { // checking if our final object has the letter as key or not
        results[sentence[i]] = [i]; //if not, we'll create it
      } else {
        results[sentence[i]] = [...results[sentence[i]],i]; //if it does, we'll create modified key with the value this time(our count)
      }
    }
  } return results;

};

module.exports = letterPositions;