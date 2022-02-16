// const assertEqual = require('../assertEqual');
// const head = require('../head');

// //TEST CODE
// assertEqual(head([],undefined));
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns '5' for ['5,6,7']", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});