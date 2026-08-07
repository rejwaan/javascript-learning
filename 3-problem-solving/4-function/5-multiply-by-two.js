// Problem 5
// Write a function that takes an array of numbers and returns a new array
// where each number is multiplied by 2.
//
// Input: [1, 2, 3, 4, 5]
// Expected output: [2, 4, 6, 8, 10]
//
// Input: [10, 20, 30]
// Expected output: [20, 40, 60]


function multipleArray(arr = []) {
    const doubled = arr.map(num => num * 2);
    return doubled;
}

console.log(multipleArray([1, 2, 3, 4, 5]));