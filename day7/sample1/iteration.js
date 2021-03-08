console.log("iteration");

let data = "vcentry";
// for(c of data){
//   console.log(c);
// }

let result = data[Symbol.iterator]()
console.log(result);
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

console.log("--------------------------------------");
//
// console.log(result.next().value);
// console.log(result.next().done);

while(true){
  let x = result.next();
  if(x.done){
    break;
  }
    console.log(x.value);
}
