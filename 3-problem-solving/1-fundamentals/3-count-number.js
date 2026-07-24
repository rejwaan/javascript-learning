// Problem 3
// Write a program to count how many numbers between 1 and 50 are divisible by 5.

// Expected output:
// 10


let count = 0;

for (let i = 1; i <= 50; i++) {
    if ( i % 5 === 0) {
        count++;
    }
}
console.log(count);