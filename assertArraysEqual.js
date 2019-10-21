const assertArraysEqual = function(a, b) {
  if (a.length !== b.length) {
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

module.exports = assertArraysEqual;

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};

