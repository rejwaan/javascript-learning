
// Write a function that removes all falsy values from an array.
// Falsy values: false, 0, "", null, undefined, NaN
//
// Input array:
// const mixed = [0, "hello", false, 42, "", null, "world", undefined, NaN, 100];
//
// Expected output:
// ["hello", 42, "world", 100]


const mixed = [0, "hello", false, 42, "", null, "world", undefined, NaN, 100];

const result = mixed.filter(num => num);
console.log(result);