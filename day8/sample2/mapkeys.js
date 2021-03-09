
let map = new Map();
map.set("username","vcentry");
map.set("year",6);
map.set("place","guindy");
let mapkey = map.keys();
let mapvalue = map.values();
let mapentry = map.entries();
console.log(mapkey);
console.log(mapvalue);
console.log(mapentry);
console.log("--------------------");
for(let key of mapkey){
  if(key == "username"){
  console.log(map.get(key));
}
}
console.log("--------------------");
for(let data of map){
  console.log(data);
}
console.log("--------------------");
for(let entry of map.entries()){
  console.log(entry);
}
