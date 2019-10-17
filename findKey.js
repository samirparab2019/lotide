const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F34A)} Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const abc = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
//, x => x.stars === 2) // => "noma"


const findKey = function(object, callback) {
  
  for (const key in object) {
    if (callback(object[key])) {
      console.log(key);
      return key;
    }
   
  }

};

const check = function(x) {
  return x['stars'] === 2;
};

assertEqual(findKey(abc, check), "noma");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
