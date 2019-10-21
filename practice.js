const iterable1 = 'boo';

for (const value of iterable1) {
  console.log(value);
}

/*FOR-OF LOOP ILLUSTRATION:
Syntax
for (variable of iterable) {
  statement
} 
*/
const countLetters = function(string) {
  //first remove spaces from the string.
  //let noSpaces = {};
  //if (string = "") {
  const noSpaces = string.split(" ").join("");
  //} else {
  //noSpcaes = string.map(String);
  //noSpcaes = string.toString().split(",")
  //}
  const results = {};
  //array can be output - const results = [];
  //this will return nothing - const results = "";

  //using for-of loop
  for (const item of noSpaces) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  console.log(results);
  return results;
};

countLetters('lighthouse in the house'); //{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
//countLetters([1, 1, 5, 2, 2, 3, 3]);
let string1 = 'lighthouse in the house';


//-------------------------------------------
const array = [1, 1, 5, 2, 2, 3, 3];
console.log(array.join('')) //1152233
console.log(string1.split(' ').join('')) //lighthouseinthehouse
let r = {};

for (const i of array){
  if(r[i]) {
        r[i]+= 1;
  } else {
  r[i] = 1;
  }

}
console.log(r); //{ '1': 2, '2': 2, '3': 2, '5': 1 }

/*let r = [];
for (const i in iterable) {
  r += i;
}
console.log(r);
return r;
*/

var ab = [];
function countEvenToTwelve(number) {
  ab.push(number);
  if (number <= 12) {
    //console.log(ab)
    countEvenToTwelve(number+2);
    //console.log(ab)
}
//console.log(ab)
}

countEvenToTwelve(0);
console.log(ab)











