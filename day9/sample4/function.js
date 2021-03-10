console.log("functions");
//normal functions
function adda(){
  console.log("add");
}

//function expression
let addb = function(){
  console.log("add");
}

//arrow functions
let addc =() => console.log("add");

//new function
//let addd = new Function([arg1,arg2,...],expression);
let addd = new Function('a','b','return a+b')

console.log(addd(1,2));
