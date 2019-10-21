// ACTUAL FUNCTION
const middle = function(array) {
  const array1 = [];
  if (array.length < 3) {
    //console.log("[]");
    array1;
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


module.exports = middle;