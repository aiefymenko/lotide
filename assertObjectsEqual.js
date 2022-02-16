//const { assertObjectsEqual } = require('.');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  return (eqObjects(actual, expected)) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;