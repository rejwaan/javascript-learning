// Problem 9
// Write a program to reverse a given string using a loop.

// Example input:
// "hello"

// Expected output:
// "olleh"


let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);