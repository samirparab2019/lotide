// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F34A)} Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    console.log("false");
    return false;
  } else {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        console.log("false");
        return false;
      }
    }
    console.log("true");
    return true;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  //console.log(results);
  return results;
};

const results1 = map(words, function(word) {
  return word[0];
});
console.log(results1);
//[ 'g', 'c', 't', 'm', 't' ]


eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]); // => true
eqArrays(results1, [ 'g', 'c', 't', 'm']); // => false

assertEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true); // => should pass