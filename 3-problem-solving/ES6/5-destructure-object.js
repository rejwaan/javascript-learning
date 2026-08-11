// Problem 5
// Write a function that takes an object with properties 'name' and 'age'.
// Using object destructuring, extract the properties and return a string:
// "Name: [name], Age: [age]"
//
// Input: { name: "Rahim", age: 25 }
// Expected output: "Name: Rahim, Age: 25"
//
// Input: { name: "Sadia", age: 30 }
// Expected output: "Name: Sadia, Age: 30"



function inputs({name, age}) {
    return `Name: ${name}, Age: ${age}`;
}

console.log(inputs({name: "Sadia", age: 30}));