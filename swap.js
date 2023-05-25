// How to swap two values with/without array destructuring

let number1 = "10";
let number2 = "20";

[number1, number2] = [number2, number1];

console.log(number1);
console.log(number2);

let temp = number2;
number2 = number1;
number1 = temp;

console.log(number1);
console.log(number2);
