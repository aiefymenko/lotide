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

const middle = (array) => {
  const midIndex = Math.floor(array.length / 2);
  for (const elem of array) {
    return (array.length <= 2) ? []
      : (array.length % 2 !== 0) ? [array[midIndex]]
        : [array[midIndex - 1], array[midIndex]];
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
