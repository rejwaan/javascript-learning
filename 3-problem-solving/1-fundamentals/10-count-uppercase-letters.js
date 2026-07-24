// Problem 10
// Write a program to count how many uppercase letters are in a given string.

// Example input:
// "Hello World JavaScript"

// Expected output:
// 4


let str = "Hello World JavaScript";

let uppercases = 0;

for (let i = 0; i < str.length; i++) {
    if (((str[i].charCodeAt() >= 65) && (str[i].charCodeAt() <= 90))) {
        uppercases++;
    }
}

console.log(uppercases);