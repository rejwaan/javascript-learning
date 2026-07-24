// Problem 8
// Write a program to count the number of vowels in a given string.
// Consider only these vowels: a, e, i, o, u.

// Example input:
// "javascript"

// Expected output:
// 3

let text = "javascript";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if ((text[i] == "a") || (text[i] == "e") || (text[i] == "i") || (text[i] == "o") || (text[i] == "u")) {
        count++;
    }
}

console.log(count);