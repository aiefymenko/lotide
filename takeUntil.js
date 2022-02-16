const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let results = []; //our desired variable as array
  for (let item of array) { //looping through array
    if (!callback(item)) { //checking if our callback function has it's item or not
      results.push(item); //if doesnt' have then pushing our item until it finds and using break
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;