console.log("assign object");

let product = {
  username : 'userA'
}
let price ={
   pricerange : 100

}
let offer = {
   offerrange : 10
}

//Object.assign(objectref,[arg1,arg2,arg3...]);

Object.assign(product,price,offer);
console.log(product);
