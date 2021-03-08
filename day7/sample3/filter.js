console.log("filter");

let objarr = [
  {id : 1,name : 'aaaa',year : '10'},
  {id : 2,name : 'bbbb',year : '20'},
  {id : 3,name : 'cccc',year : '30'},
  {id : 4,name : 'dddd',year : '40'},
  {id : 5,name : 'eeee',year : '50'},
];

// objarr.filter(function(item,index,array){
//
// })
let result = objarr.filter((item) => item.id > 3)
console.log(result);
