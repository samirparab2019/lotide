const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};


const assertArrayEquals = function(a, b) {
  
  if (a.length !== b.length) {
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

// ACTUAL FUNCTION

function without(arr1, arr2) {
  let missings = [];
  let matches = false;

  for (var i = 0; i < arr1.length; i++) {
      matches = false;
      for ( var e = 0; e < arr2.length; e++ ) {
          if ( arr1[i] === arr2[e] ) {
            matches = true;
          }
      }
      if(!matches) {
        missings.push(arr1[i]);
      }
  }
  return missings;
}

  //...

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);