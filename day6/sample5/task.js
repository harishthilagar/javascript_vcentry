let arr = new Array();

for(let i = 0 ;i<100;i++){
  let j=i+10;
   arr[i] = "vcentry"+j;
}
console.log(arr);

for(let i = arr.length-1;i >= 0;i--){
  console.log(arr[i]);
}
