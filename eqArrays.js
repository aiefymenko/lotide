const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; //if arrays are different exiting right away
  for (let i = 0; i < arr1.length; i++) {     //looping though one of the arrays as the length is the same
    if (arr1[i] !== arr2[i]) {    //checking if every element of array is the same from different array
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;