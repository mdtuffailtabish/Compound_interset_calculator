// calculation of compound intrest

let p=5000;
let r=10;
let n=2;
let t=2;

let first_part = (1 + (r / 100) / n);
let second_part = n * t;

let a = p * (first_part ** second_part);
let ci = a - p;
console.log("Amount after 2 year is: ",a);
console.log("The compound interest after 2 year is: ",ci);

