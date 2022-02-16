const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = (array) => {
  const midIndex = Math.floor(array.length / 2); //assigning new variable to the middle length as largest integer
  for (const elem of array) { //looping through array
    return (array.length <= 2) ? [] //checking if lenght of array is less/equal than 2 and returning empty array
      : (array.length % 2 !== 0) ? [array[midIndex]] //checking if length of array not divides by 2 without reminder and adding our middle element as integer
        : [array[midIndex - 1], array[midIndex]]; //returning 2 middle integers if other both statements not applied
  }
};

module.exports = middle;

