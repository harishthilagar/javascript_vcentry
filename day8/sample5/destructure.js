console.log("Destructuring");
let arr = ["vcentry","technologies"];
// let firstname = arr[0];
// let lastname = arr[1];
let [firstname,lastname] = ["vcentry","technologies"];
console.log(`welcome ${firstname}  ${lastname}`);

let [firstnamea,lastnamea] = ["vcentry","technologies",6,"guindy"];
console.log(`welcome ${firstnamea}  ${lastnamea}`);

let [firstnameb,,,place] = ["vcentry","technologies",6,"guindy"];
console.log(`welcome ${firstnameb}  ${place}`);

let [firstnamec,lastnamec,...r] = ["vcentry","technologies",6,"guindy","chennai"];
console.log(`welcome ${firstnamec}  ${lastnamec}`);
console.log(r);

// let user = ["usera","userb"];
let guestuser = ["usera"];
let adminuser  = ["userb"];
 [guestuser,adminuser] = [adminuser,guestuser]
  console.log(guestuser);
  console.log(adminuser);
let [guser = "usera",auser = "userb"] = ["userc"];
console.log(guser);
console.log(auser);
