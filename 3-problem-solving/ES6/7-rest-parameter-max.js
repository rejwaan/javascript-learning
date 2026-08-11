// Problem 7
// Write a function that takes any number of arguments and returns the maximum number.
// Use the rest parameter to collect all arguments.
//
// Input: 5, 10, 3, 8
// Expected output: 10
//
// Input: 25, 18, 30, 22, 27
// Expected output: 30
//
// Input: 7, 7, 7
// Expected output: 7



function inputs(...arr) {
    let Max = Math.max(...arr);
    return Max;
}
console.log(inputs(5, 10, 3, 8));