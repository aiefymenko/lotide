// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = (array) => {
  let arr2 = array.slice(1);
  return arr2;
};

module.exports = tail;