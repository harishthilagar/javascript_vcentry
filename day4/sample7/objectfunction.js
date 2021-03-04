console.log("object function");

let product = {

  username : 'userA',
  qty : 10,
   calculateprice : function() {
    console.log("price calculated");
  }
}

console.log(product);
product.calculateprice();
