console.log("find");
let arr = [10,20,30,40,50];
arr.forEach(function(item,index,array){
    console.log(array);
})

arr.forEach((item, i,array) => {
  console.log(item);
});


console.log("------------------------------------");

let objarr = [
  {id : 1,name : 'aaaa',year : '10'},
  {id : 2,name : 'bbbb',year : '20'},
  {id : 3,name : 'cccc',year : '30'},
  {id : 4,name : 'dddd',year : '40'},
  {id : 5,name : 'eeee',year : '50'},
];

// objarr.find(function(item,index,array){
//
// })

let result = objarr.find((item) => item.id == 3)
console.log(result);
