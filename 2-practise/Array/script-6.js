// Array Spread and destructuring

// 1 - spread operator (...)

// copy array

let fruits = ["Apple", "Banana", "Orange"];

let copy = [...fruits];
console.log(copy);

copy.push("Mango");
console.log(fruits);
console.log(copy);


// merge array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

// merge two arrays

let merged = [...arr1, ...arr2];
console.log(merged);

// merge with individual arrays
let all = [...arr1, ...arr2, 33, 44, ...arr3];
console.log(all);


// add elements...................

let anumbers = [1, 2, 3];

let withEnd = [...anumbers, 44, 33];
console.log(withEnd);



// 2 - Array destructuting .........................

let colors = ["Red", "Green", "Blue"];

let [apple, mango, berry] = colors;

console.log(apple);
console.log(mango);
console.log(berry);

// skip

let [newApple, , newBerry] = colors;
console.log(newBerry);



// default values ...............................

let colors2 = ["red"];

let [first, second = "green"] = colors2;
console.log(second);


let [a, b, c = 3] = [1, 2];
console.log(a);
console.log(b);
console.log(c);


// rest pattern (...) with destructuring...............

let numbers2 = ["a", 2, 3, 4, 5];

let [x, ...others] = numbers2;

console.log(x);
console.log(others);

// nested arrays- we will cover it letter (maybe future)