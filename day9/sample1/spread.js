console.log("Spread Operator");
let arr = [1,2,3,4,5];
let copy = arr;
console.log(arr);
console.log(copy);
copy[3] = 40;
console.log(arr);
console.log(copy);
console.log("-------------------------");
let arra = [1,2,3,4,5];
let copya = [...arra]
console.log(arra);
console.log(copya);
copya[3] = 40;
console.log(arra);
console.log(copya);
