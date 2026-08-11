// Problem 7
// Write a function that takes an array of numbers and returns the total sum.
// Use a for loop to solve this (don't use reduce).
//
// Input: [10, 20, 30, 40]
// Expected output: 100
//
// Input: [5, 10, 15]
// Expected output: 30



function calulateTotal(arr = []) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}

console.log(calulateTotal([10, 20, 30, 40]));