// Problem 1
// Write a function that takes a user's name as input and returns a greeting message.
// If no name is provided, it should return "Hello, Guest!"
//
// Input: "Rahim"
// Expected output: "Hello, Rahim!"
//
// Input: (no argument)
// Expected output: "Hello, Guest!"


function greeting(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greeting("Abdur Rahim"));