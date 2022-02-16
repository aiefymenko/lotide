const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  let modifiedArr = []; //our desired output as array
  for (const element of source) { //looping though array
    if (!itemsToRemove.includes(element)) { //checking if the itme that needed to be removed is the same as elements from array
      modifiedArr.push(element); //if it's not there then we pushing that element
    }
  }
  return modifiedArr; // if it's there we returning our output
};
module.exports = without;