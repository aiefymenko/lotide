const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  console.log("eqArray", eqArrays(arr1, arr2));
  return eqArrays(arr1, arr2)
    ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const flatten = (array) => {
  let flattened = [];
  for (const elem of array) {
    if (!Array.isArray(elem)) {
      flattened.push(elem);
    } else {
      for (const arrElem of elem) {
        flattened.push(arrElem);
      }
    }

  }
  return flattened;
};

flatten([1, 2, [3, 4], 5, [6]]);
