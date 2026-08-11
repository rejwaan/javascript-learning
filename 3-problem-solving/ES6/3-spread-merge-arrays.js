// Problem 3
// Write a function that takes two arrays and merges them into one array using the spread operator.
//
// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6]
// Expected output: [1, 2, 3, 4, 5, 6]
//
// Input: arr1 = ["a", "b"], arr2 = ["c", "d", "e"]
// Expected output: ["a", "b", "c", "d", "e"]



function inputs(arr1, arr2) {
    let merged = [...arr1, ...arr2];
    return merged;
}

console.log(inputs([1, 2, 3], [4, 5, 6]));