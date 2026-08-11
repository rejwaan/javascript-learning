// Problem 1
// Write a function that takes a person's name and age as input.
// Using template literals, return a string in this format:
// "My name is [name] and I am [age] years old. In 5 years, I will be [age + 5] years old."
//
// Input: name = "Rahim", age = 25
// Expected output: "My name is Rahim and I am 25 years old. In 5 years, I will be 30 years old."
//
// Input: name = "Sadia", age = 30
// Expected output: "My name is Sadia and I am 30 years old. In 5 years, I will be 35 years old."





function user(name, age) {
    return `My name is ${name} and I am ${age} years old. In 5 years, I will be ${age + 5} years old.`
}

console.log(user("Sadia" , 30));