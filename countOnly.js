const assertEqual = require('./assertEqual');


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}; //desired output as object
  for (let item of allItems) { // looping thourhg array
    if (itemsToCount[item]) { //checking if element from array is the key of object that needed to check
      if (results[item]) { // if it's there then we adding a value of the key +1
        results[item] += 1;
      } else {
        results[item] = 1; // if it's not there we creating that value
      }
    }
  } return results;
};

module.exports = countOnly;

