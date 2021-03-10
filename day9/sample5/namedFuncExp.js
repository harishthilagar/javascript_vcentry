console.log("Named Function Expression");
function msg(fname,lname){
   function welcome(){
      return fname+" "+lname;
   }
   return welcome();
}

console.log("hii",msg("usera","technology"));
console.log("bye",msg("userb","technology"));

console.log("----------------------------");

let message = function welcome(fname,lname){
    if(fname){
    return fname+" "+lname;
  }else{
    welcome("guest","technology");
  }
}

console.log(message("usera","technology"));
