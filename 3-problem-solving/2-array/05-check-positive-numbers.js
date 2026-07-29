// Problem 5
// Write a program to check whether at least one number in the given array
// is greater than 100.
//
// Input array:
// [25, 40, 75, 120, 55]
//
// Expected output:
// true


const numbers = [25, 40, 75, 120, 55];

const isHas = numbers.some(num => num > 100);
console.log(isHas);