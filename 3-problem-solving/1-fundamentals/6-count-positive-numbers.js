// Problem 6
// Write a program to count how many positive numbers are between -10 and 10.

// Expected output:
// 10

let positiveNumber = 0;

for (let i = -10; i <= 10; i++) {
    if (i > 0) {
        positiveNumber++;
    }
}

console.log(positiveNumber);