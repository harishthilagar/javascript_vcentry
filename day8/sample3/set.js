console.log("Set");
let sample = ['vcentry',6,'guindy','vcentry',6,'guindy'];
 let seta = new Set();
 seta.add("vcentry");
 seta.add(6);
 seta.add("guindy");
 seta.add("vcentry");
 seta.add("6");
 seta.add("guindy");
 console.log(sample);
 console.log(seta);
 for(let s of seta){
   console.log(s);
 }
seta.clear();
console.log(seta.size);
