// Write a function that calculates the sum of all even numbers in an array.
//
// Input array:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// Expected output:
// 30 (because 2 + 4 + 6 + 8 + 10 = 30)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(num => num%2 == 0);

const sum = even.reduce((acc, num) => acc + num, 0);
console.log(sum);