// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  return (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  const obj = {};
  for (let element of sentence) {
    if (element !== ' ') {
      if (obj[element]) {
        obj[element] += 1;
      } else {
        obj[element] = 1;
      }
    }
  } console.log(obj);

};
countLetters('lighthouse in the house');