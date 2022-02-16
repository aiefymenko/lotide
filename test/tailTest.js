// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Check the original array


describe("#tail", () => {
  it("returns '3' for 'words.length'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3);
  });
  it("returns '[2,3]' for '[1,2,3]]'", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});