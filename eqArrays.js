

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        //console.log("false");
        return false;
      }
    }
    //console.log("true");
    return true;
  }
};

module.exports = eqArrays;