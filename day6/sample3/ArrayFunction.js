console.log("Array Function");

let course = ["selenium","java"];

course[2] = "python";

console.log(course);
course[2] = "";
console.log(course.length);
console.log(course);

console.log("-------------------------------------");

let coursea = ["selenium","java"];
coursea.push("python");
console.log(coursea);
let rresult = coursea.pop();
console.log(coursea);
console.log(rresult);

console.log("-------------------------------------");
coursea.shift();
console.log(coursea);
 coursea.unshift("devops");
console.log(coursea);
