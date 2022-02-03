// FUNCTION IMPLEMENTATION
const assertEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  return (eqObjects(object1, object2)) ? console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

const eqObjects = (object1, object2) => {
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

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2);
