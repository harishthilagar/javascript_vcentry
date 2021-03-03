console.log("object looping");

let product = {
   username : 'userA',
   pricerange : 100,
   qtyrange : 10

}

for(let key in product){
  // console.log(key);
  console.log(product[key]);
}

let data = 'username' in  product;
console.log(data);
