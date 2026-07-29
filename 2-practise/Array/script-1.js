// Array - basic

let fruits = ["apple", "mango", "cherry"];
let numbers = [1, 3, 4, 5];
let mixed = ["banana", true, false, 2, null];
let empty = [];

// Array constructor
let newFruits = new Array("apple", "watermelon");

// access , modify ...
console.log(fruits[1]); // mango
console.log(fruits[5]); // undefined

fruits[2] = "grapes";
console.log(fruits);


// length property ...

console.log(fruits.length); // 3
console.log(empty.length);  // 0

console.log(fruits[fruits.length - 1]); // grapes

fruits.length = 2;
console.log(fruits); // grapes gone

fruits.length = 5;
console.log(fruits); // <3 empty items>

// array check...

console.log(Array.isArray(fruits)); // true
console.log(typeof fruits); // object
console.log(fruits instanceof Array);  // true

// convert to a string..
console.log(fruits.toString()); // apple,mango,,,