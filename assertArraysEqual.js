// FUNCTION IMPLEMENTATION
//const assertEqual = (actual, expected) => {
//  return (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//};
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1,arr2) => {
  console.log('eqArray', eqArrays(arr1, arr2));
  return (eqArrays(arr1, arr2)) ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

//console.log(eqArrays([3], [1, 2, 3]));
//eqArrays([1, 2, 3], [3, 2, 1]);
//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual([1], [1, 2, 3]);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);