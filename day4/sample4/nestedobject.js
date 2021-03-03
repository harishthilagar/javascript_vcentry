console.log("nested object");

let product = {

  username : 'userA',
  price : 100,
  range : {
    qty : 10,
    offer : 20
  }
}

console.log(product);
console.log(product.range.offer);
product.range.place = "chennai";
console.log(product);
