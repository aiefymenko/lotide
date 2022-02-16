const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = []; //creating our output as an empty array
  for (let item of array) {  //looping through an array
    results.push(callback(item)); //using our callback function and adding element from existing array
  }
  return results;
};

module.exports = map;


