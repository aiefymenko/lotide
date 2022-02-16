const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  for (let key in obj) {  //looping though keys in object
    if (callback(obj[key])) { //using our callback function to check if it contains a key in our object
      return key; //returning key if it has
    }
  }
  return undefined;  // returing undefined if it doesn't
};
module.exports = findKey;

