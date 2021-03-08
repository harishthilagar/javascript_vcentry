console.log("split");

let arr = "vcentry technologies Guindy Chennai";

// for(a of arr){
//   console.log(a);
// }

let result = arr.split(" ");
console.log(result);
for(r of result){
   console.log(r);
}
console.log("------------------------");

let jointarr = ['vcentry','technologies','Guindy','Chennai'];
let joinresult  = jointarr.join("-");
console.log(joinresult);
