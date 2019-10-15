const assertArraysEqual = function(a, b) {
  if (a.length !== b.length) {
    console.log
    return false;
  } else {
  for (var i = 0; i < a.length; ++i) {
    if (!assertEqual (a[i], b[i])) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}
}

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false