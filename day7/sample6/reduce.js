console.log("reduce");

let arr = [1,2,3,4,5];
// arr.reduce(function(accumulator,item,index,array){
//
// })

let result = arr.reduce((sum,currentdata) =>sum+currentdata,10);
console.log(result);
