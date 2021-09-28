let shoes = 15.678;
let coat = 123.965;
let pants = 90.2345;

let max = Math.max(shoes, coat, pants);
console.log(max);// max meaning

let min = Math.min(shoes, coat, pants);
console.log(min);




let sum = shoes + coat + pants;
console.log(sum);



let integerShoes = Math.trunc(shoes);
let integerPants = Math.trunc(pants);
let integerCoat = Math.trunc(coat);
let integerSum = integerCoat + integerPants + integerShoes;
console.log(integerSum);



let roundSum= Math.round(sum /100)* 100;
console.log(roundSum);

console.log(integerSum % 2 == 0);


let change = 500 - sum;
console.log(change);


let avarage = sum / 3;
console.log(Math.floor(avarage * 100) / 100);



let sale = Math.random(100)*100;
let roundSale  = Math.round(sale);
console.log(roundSale);

let saleValue = (integerPants * roundSale) / 100;
let roundSaleValue = Math.trunc(saleValue);
console.log(roundSaleValue);
let profit = (integerPants/2) - roundSaleValue;
console.log(profit);

