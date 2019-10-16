

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else {
    return true;
  }
};


const assertArrayEquals = function(a, b) {
  
  if (a.length !== b.length) {
    console.log(b.length);
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

// ACTUAL FUNCTION
const middle = function(array) {
  const array1 = [];
  if (array.length < 3) {
    //console.log("[]");
  } else if (array.length % 2 === 0) {
    const mid = array.length / 2;
    //console.log(`${array[mid - 1]}, ${array[mid]}`);
    array1.push(array[mid - 1]);
    array1.push(array[mid]);
  } else if (array.length % 2 !== 0) {
    //console.log(parseInt(array.length / 2));
    const mid1 = array.length - Math.round(array.length / 2);
    //console.log(array1.push[mid1]);
    array1.push(array[mid1]);
  }
  return array1;
};
//...


//assertArrayEquals(middle([1,2,3]), [2]);

assertArrayEquals(middle([1]), []); // => []
assertArrayEquals(middle([1, 2]), []); // => []
assertArrayEquals(middle([1, 2, 3]), [2]); // => [2] assertArrayEquals(middle([1,2,3]), [2])
assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]