// destructuring in js

// simple example

let person1 = {name: "reze", age: 34};
let {name, age} = person1;

console.log(name, age);

//===============================================

// array destructuring...

let colors = ["red", "green", "blue"];

// basic..
let [first, second, third] = colors;
console.log(first, second, third);

// skip elements by comma...
let [color1, , color3] = colors;
console.log(color1, color3);

// swap variables
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

// rest pattern
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, ...rest] = numbers;
console.log(num1);
console.log(num2);
console.log(rest);