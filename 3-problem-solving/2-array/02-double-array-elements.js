// Problem 2
// Write a program to create a new array where each element
// of the given array is multiplied by 2.
//
// Input array:
// [2, 4, 6, 8, 10]
//
// Expected output:
// [4, 8, 12, 16, 20]


const numbers = [2, 4, 6, 8, 10];

let doubled = numbers.map(num => num * 2);
console.log(doubled);