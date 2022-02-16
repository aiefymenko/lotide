// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let element in object1) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } else {
      if (object1[element] !== object2[element]) return false;
    }
  }
  return true;
};


module.exports = eqObjects;

