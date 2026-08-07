// Problem 4
// Write a function that takes two numbers and returns the larger one.
// If both numbers are equal, return "Equal".
//
// Input: 10, 20
// Expected output: 20
//
// Input: 15, 15
// Expected output: "Equal"


function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }

    else if(num2 > num1) {
        return num2;
    }

    else {
        return "Equal";
    }
}

console.log(findMax(10, 20));
console.log(findMax(15, 15));