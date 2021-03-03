console.log("object");

let product = {
   username : 'userA',
   price : 100,

}

console.log(product);
console.log(product.username);
console.log(product.price);
product.qty = 10;
console.log(product);
console.log(product.qty);
delete product.qty;
console.log(product);
