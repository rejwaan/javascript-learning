// Write a function that finds the longest word from an array of words.
//
// Input array:
// const words = ["apple", "banana", "strawberry", "grape", "watermelon"];
//
// Expected output:
// "strawberry"


const words = ["apple", "banana", "strawberry", "grape", "watermelon"];

const longest = words.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
}, "");
console.log(longest);