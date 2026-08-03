// Write a function that finds the first negative number from an array.
// If no negative number exists, return "No negative number found".
//
// Input array:
// const numbers = [5, 12, -3, 8, -7, 10];
//
// Expected output:
// -3


const numbers = [5, 12, -3, 8, -7, 10];

const found = numbers.find(num => num < 0);
console.log(found);