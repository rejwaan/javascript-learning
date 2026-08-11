// Problem 4
// Write a function that takes any number of arguments and returns their sum.
// Use the rest parameter to collect all arguments.
//
// Input: 1, 2, 3
// Expected output: 6
//
// Input: 10, 20, 30, 40
// Expected output: 100
//
// Input: 5, 5, 5, 5, 5
// Expected output: 25



function inputs(...arr) {
    let total = arr.reduce((acc, num) => (acc + num), 0);

    return total;
}

console.log(inputs(3, 4, 6, 6, 8));