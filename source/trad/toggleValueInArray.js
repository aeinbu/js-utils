function toggleValueInArray(val, arr) {
  var ix = arr.indexOf(val);
  if(ix === -1){
    // add to array
    arr.push(val);
  }
  else
  {
    // remove from array
    arr.splice(ix, 1);
  }
}

module.exports = toggleValueInArray;


// Usage:
//      var arr = ["socks", "pants"];
//      toggleValueInArray1("socks", arr);
//      toggleValueInArray1("shirt", arr);
//
// arr is now ["pants", "shirt"]