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

const takeUntil = function(array, callback) {
  //const results = array.map(function(callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) !== true) {
      results.push(item);
    } else {
      break;
    }
      
  }

  //console.log(results);
  return results;
};

//[ false, false, false, false, false, true, false, false, false ]
//---
//[ false, false, false, false, true, false, false, false, false ]


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//[ 1, 2, 5, 7, 2 ]
//---
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

eqArrays(results1, [ 1, 2, 5, 7, 2 ]); // => true
eqArrays(results1, [ 1, 2, 5, 7 ]); // => false
eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => true
eqArrays(results2, [ 'I\'ve', 'been', 'to']); // => false

assertEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true); // => should pas