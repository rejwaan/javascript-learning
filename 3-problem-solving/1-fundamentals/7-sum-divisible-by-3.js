// Problem 7
// Write a program to calculate the sum of all numbers between 1 and 30 that are divisible by 3.

// Expected output:
// 165

sum = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        sum += i;
    }
}

console.log(sum);