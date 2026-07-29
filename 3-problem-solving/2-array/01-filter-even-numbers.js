// Problem 1
// Write a program to create a new array containing only the even numbers
// from the given array.

// Input array:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Expected output:
// [2, 4, 6, 8, 10]


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEvenNumbers = numbers.filter(nums => nums%2==0);

console.log(filterEvenNumbers);