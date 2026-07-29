// Problem 4
// Write a program to create a new array that contains only unique values
// from the given array.
//
// Input array:
// [1, 2, 2, 3, 4, 4, 5, 5, 5]
//
// Expected output:
// [1, 2, 3, 4, 5]


const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const uniqueNums = numbers.filter((num, index) => {
    return numbers.indexOf(num) === index;
});

console.log(uniqueNums);