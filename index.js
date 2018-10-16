// const readonlyProxy = require("./source/readonlyProxy");

// module.exports = readonlyProxy;


//require("./test");

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

let arr = ["socks", "pants"];
let toggler = toggleValueInArray(arr);
toggler("socks");
toggler("shirt");
console.log(arr);