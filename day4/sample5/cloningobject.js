console.log("cloning object");

let amazonproduct = {
    username : 'userA',
    productname : 'productA',
    price : 1000,
    image : 'image1.jpg'
}

let flipkartproduct = amazonproduct;

console.log(amazonproduct);
console.log(flipkartproduct);

amazonproduct.username ="userB";
console.log('--------------------------------------------');
console.log(amazonproduct);
console.log(flipkartproduct);

flipkartproduct.username="userC";
console.log('--------------------------------------------');
console.log(amazonproduct);
console.log(flipkartproduct);
