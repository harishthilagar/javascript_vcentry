console.log("time out");
function message(){
  console.log("welcome vcentry");
}
message();
let id = setTimeout(message,5000);
console.log(id);
clearTimeout(id);
