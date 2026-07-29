// Problem 3
// Write a program to find the first number in the given array
// that is greater than 50.
//
// Input array:
// [12, 25, 48, 63, 75, 90]
//
// Expected output:
// 63


const numbers = [12, 25, 48, 63, 75, 90];

let found = numbers.find(num => num > 50);
console.log(found);