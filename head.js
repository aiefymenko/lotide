// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  return (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const head = (array) => {
  return array[0];
};

console.log(head([],undefined));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");