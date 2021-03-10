console.log("map");

let obj = {
    username : "vcentry",
    year : 6 ,
    place : "guindy"
}
console.log(obj.username);
console.log(obj['username']);
let key = Object.keys(obj);
console.log(key);
let value = Object.values(obj);
console.log(value);
let entry = Object.entries(obj);
console.log(entry);
console.log("--------------------------------");

let map = new Map();
//set
//get
//clear
//keys
//values
//size
console.log(map.size);
map.set("username","vcentry");
map.set("year",6);
map.set("place","guindy");
console.log(map);
console.log("---------------------------");
console.log(map.get("username"));
map.clear();
console.log(map);
