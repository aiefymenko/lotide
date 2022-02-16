const assertEqual = require('./assertEqual');

const findKeyByValue = (obj, val) => {
  for (let key in obj) {  // looping through keys of our object
    if (obj[key] === val) { // checking if value of the key is equal to defined value
      return key; // returning key if it is
    }
  }
  return undefined; //returing undefined if it's not
};
module.exports = findKeyByValue;