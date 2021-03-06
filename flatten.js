const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};


const assertArraysEquals = function(a, b) {
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

const flatten = function(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};
 
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6];
assertArraysEquals(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);