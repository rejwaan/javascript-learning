// Problem 9
// Write a function called `processArray` that takes an array and a callback function.
// The function should apply the callback to each element of the array and return a new array.
//
// Example:
// Input: [1, 2, 3, 4] and callback = (num) => num * 2
// Expected output: [2, 4, 6, 8]
//
// Input: [5, 10, 15] and callback = (num) => num + 5
// Expected output: [10, 15, 20]



function processArray(arr = [], callback) {
    let result = [];

    for (let n of arr) {
        const newValue = callback(n);
        result.push(newValue);
    }

    return result;
}

console.log(processArray([1, 2, 3, 4], num => num * 2));