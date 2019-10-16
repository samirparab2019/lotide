// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(a, b) {
  if (a.length !== b.length) {
    console.log("false");
    return false;
  } else {
    for (let i = 0; i < a.length; ++i) {
      if (!assertEqual(a[i], b[i])) {
        console.log("false");
        return false;
      }
    }
    console.log("true");
    return true;
  }
};

const letterPositions = function(sentence) {
  const noSpaces = sentence.split(" ").join("");

  const results = {};
  // logic to update results here
  for (let i = 0; i < noSpaces.length; i++) {
    
    const char = noSpaces[i];
    if (!results[char]) {
      results[char] = [i];
    } else {
      results[char].push(i);
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [2, 3]);
