console.log("key object");

let product = {
  username : 'userA',
  price : 100,
  qty : 10
}

console.log(product.username);
console.log(product['username']);

let productA = {
  "user name" : 'userB',
  "price range" : 100
}

console.log(productA);
//console.log(productA.user name); error
console.log(productA['user name']);
productA["qty range"] = 10;
console.log(productA);
