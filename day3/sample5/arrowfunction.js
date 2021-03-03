console.log("arrow function");

function functionNamea() {

}

let functionNameb = function () {

}

let functionNamec = () => console.log( 1 + 1);
let functionNamed = (a,b) => console.log( a + b);

functionNamec();
functionNamed(2,2);

let functionNamee = () =>  1 + 1;
let functionNamef = (a,b) => a + b;

console.log(functionNamee());
console.log(functionNamef(2,2));

let functionNameg = () => {
  let a = 10;
  let b = 10;
  let c = a+b;
  return c;
}

console.log(functionNameg());
