// Problem 11
// Write a program to count how many digits are in a given number.

// Example input:
// 123456

// Expected output:
// 6



let numbers = 123456;
let str = numbers.toString();
let count = 0;

for (let i = 0; i < str.length; i ++) {
    count++;
}

console.log(count);