// Problem 3
// Write a function that checks if a number is even.
// Return true if even, false if odd.
//
// Input: 4
// Expected output: true
//
// Input: 7
// Expected output: false


function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));