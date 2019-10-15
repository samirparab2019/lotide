// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  for (i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(`${String.fromCodePoint(0x1F600)} Assertion Passed: ${actual[i]} === ${expected[i]}`);
    } else {
      console.log(`${String.fromCodePoint(0x1F34A)} Assertion Failed: ${actual[i]} !=== ${expected[i]}`);
    }
  }
  
};
function tail(array1) {
  return array1.slice(1);
}

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!