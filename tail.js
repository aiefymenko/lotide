// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = (array) => {
  let arr2 = array.slice(1); //returning new array with every element from array but 1st one at index[0]
  return arr2;
};

module.exports = tail;