console.log("splice");

let course = ["selenium","python","java"];

// course.splice("index","delete count");
course.splice(1,1);
console.log(course);
// course.splice("index","delete count","new value");

let coursea = ["selenium","python","java"];
coursea.splice(1,1,"devops");
console.log(coursea);

console.log("-----------------------------------");

let courseb = ["selenium","python","java"];
courseb.splice(1,1,"devops","fullstack");
console.log(courseb);

console.log("-----------------------------------");

let coursec = ["selenium","python","java","fullstack","devops"];
// coursec.splice(1);
coursec.splice(1,3);
console.log(coursec);
