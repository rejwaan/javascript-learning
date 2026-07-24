// Problem 4
// Write a program to calculate the sum of all even numbers from 1 to 20.

// Expected output:
// 110

let sum = 0;

for (let i = 2; i <= 20; i+=2) {
    sum += i;
}

console.log(sum);