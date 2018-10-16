let toggleValueInArray = arr => val => {
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
//    let arr = ["socks", "pants"];
//    let toggler = toggleValueInArray(arr);
//    toggler("socks");
//    toggler("shirt");
//
// arr is now ["pants", "shirt"]
