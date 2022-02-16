const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = (array) => {
  let flattened = []; //creating new array where our final result will go
  for (const elem of array) { //looping through array
    if (!Array.isArray(elem)) { //checking if element is not an [array]
      flattened.push(elem);    //adding to our designated array
    } else {
      for (const arrElem of elem) { //if it's an array then we need to "open" it and itterate over and over until we see the element which is not array
        flattened.push(arrElem); //adding to our designated array
      }
    }

  }
  return flattened; // returning our array
};

module.exports = flatten;


