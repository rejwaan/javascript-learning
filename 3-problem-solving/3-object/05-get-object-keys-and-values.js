// Problem 5
// Write a function that takes an object and returns two arrays:
// 1. Array of all keys
// 2. Array of all values
//
// Input object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 28,
//     occupation: "Developer"
// };
//
// Expected output:
// Keys: ["firstName", "lastName", "age", "occupation"]
// Values: ["John", "Doe", 28, "Developer"]



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    occupation: "Developer"
};

console.log(Object.keys(person));
console.log(Object.values(person));