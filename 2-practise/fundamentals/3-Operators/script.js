// operators

// Arithmetic operators

console.log(4+4);
console.log(5/3);
console.log(3**4);
console.log(4%2);
// more --  (-) (*)


// Assignment operators

let a = 8;

console.log(a += 4); // 12
console.log(a -= 5); // 12 - 5
console.log(a++); // 7
console.log(a); // 8
console.log(++a); // 9


// comparison operators

console.log(5 == 4);  // false
console.log("4" == 4); // true
console.log("4" === 4); // false
console.log(6 > 3);  // true
console.log(5 != "5");  // false
console.log(6 !== "6"); // true



// Logical Operators -  && , || , !

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);  // false
console.log(!false);  // true


// logical operators - short-circuit evaluation

let x = null && "faah";
console.log(x);  // null

console.log("XX" || "YY");  // XX - first true
 
console.log(0 ?? 100); // 0 
console.log(null ?? 100); // 100
console.log(undefined ?? 100); // 100
console.log("" ?? "X"); //  ""



// Optional chaining (?.) - ES2020

// old way --
let user = {name: "John"};
// console.log(user.address.city); // Error

// new way
console.log(user?.address?.city); // undefined


// Ternary Operator (conditional operator)

let age = 20;
let status = age >= 18 ? "Lisense" : "NoLisense";
console.log(status);


// spread operaotor (...) -ES6

let fruits = ["apple", "mango", "banana", "cherry", "watermelon", "orange"];

let [fruit1, fruit2, ...otherfruits] = fruits; 

console.log(otherfruits);


// practice----------------------

console.log(5 + "3"); // 53

console.log(5 - "3"); // 2

console.log(null || "default"); // de
console.log(null ?? "default"); // de