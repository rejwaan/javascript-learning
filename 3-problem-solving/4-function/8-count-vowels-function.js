// Problem 8
// Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in it.
// The function should be case-insensitive (both uppercase and lowercase vowels count).
//
// Input: "Hello World"
// Expected output: 3 (e, o, o)
//
// Input: "Bangladesh"
// Expected output: 3 (a, a, e)


function countVowels(str = "") {
    const newStr = str.toLowerCase();

    const vowels = "aeiou";
    let count = 0;

    for (let s of newStr) {
        if (vowels.includes(s)) {
            count += 1;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));