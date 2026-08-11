// Problem 2
// Write a function that takes an array with 3 numbers and uses array destructuring
// to assign them to variables a, b, and c. Then return the sum of a, b, and c.
//
// Input: [10, 20, 30]
// Expected output: 60
//
// Input: [5, 15, 25]
// Expected output: 45


function inputs(arr) {
    let [a, b, c] = arr;
    return a + b + c;
}

console.log(inputs([10, 20, 30]));