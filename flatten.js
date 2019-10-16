const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};


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

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
 




console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]))); // => [1, 2, 3, 4, 5, 6];
