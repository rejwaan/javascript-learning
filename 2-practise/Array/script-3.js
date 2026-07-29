// array search and check methods

// includes()

let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits.includes("Banana"));  // true


// indexOf()

console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Apple"));  // 0


// find()

let evens = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(evens.find(num => num > 4)); // 5


// findIndex()

console.log(evens.findIndex(num => num > 4));  // 4


// some()

console.log(evens.some(num => num > 5)); // true
console.log(evens.some(num => num > 8)); // false


// every()

console.log(evens.every(num => num > 0));  // true
console.log(evens.every(num => num > 2));  // false