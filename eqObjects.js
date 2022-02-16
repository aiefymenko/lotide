// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; //returning false right away if keys.length are not the same through both objects
  for (let element in object1) {  //looping though object1
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {     //checking if value if the iterated object[key] is an array
      if (!eqArrays(object1[element], object2[element])) {    // checking if both arrays are the same from eqArrays function
        return false;
      }
    } else {
      if (object1[element] !== object2[element]) return false;  //checking if values are different
    }
  }
  return true;
};


module.exports = eqObjects;

