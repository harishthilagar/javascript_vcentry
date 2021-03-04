console.log("math operation");

//floor
//round-of

let a = 5.1;
let b = 5.6;
let c = 5.12345;
let d = -1.1;
let e = -1.7;

console.log(Math.floor(a));
console.log(Math.floor(b));
console.log(Math.floor(c));
console.log(Math.floor(d));
console.log(Math.floor(e));
console.log("-----------------------------");
console.log(Math.round(a));
console.log(Math.round(b));
console.log(Math.round(c));
console.log(Math.round(d));
console.log(Math.round(e));
console.log("-----------------------------");
console.log(Math.ceil(a));
console.log(Math.ceil(b));
console.log(Math.ceil(c));
console.log(Math.ceil(d));
console.log(Math.ceil(e));
console.log("-----------------------------");
console.log(Math.trunc(a));
console.log(Math.trunc(b));
console.log(Math.trunc(c));
console.log(Math.trunc(d));
console.log(Math.trunc(e));

console.log("-----------------------------");
console.log(Math.random());

// console.log("-----------------------------");
// console.log(Math.randInteger(10,3));

console.log("-----------------------------");
console.log(Math.max(1,3,5,6,2,9));

console.log("-----------------------------");
console.log(Math.min(1,3,5,6,2,9));

console.log("-----------------------------");
console.log(Math.pow(3,3));

console.log("-----------------------------");
let f = 10.12345;
console.log(f.toFixed(1));
console.log(f.toFixed(2));

let strnum1 = "100";
let strnum2 = "100";
let strnum3 = strnum1 + strnum2;
console.log(strnum3);

let strnum4 = Number(strnum1) + Number(strnum2);
console.log(strnum4);


let strnuma = "100";
let strnumb = "100";

let strnum5 = parseInt(strnuma) + parseInt(strnumb);
console.log(strnum5);

let strnumc = "100.00";
let strnumd = "100.20";
let strnum6 = parseFloat(strnumc) + parseFloat(strnumd);
console.log(strnum6);

let strFinite = 100;
console.log(Number.isFinite(strFinite));

let strFinite1 = "String1";
console.log(Number.isFinite(strFinite1));

let strFinite2 = Infinity;
console.log(Number.isFinite(strFinite2));
