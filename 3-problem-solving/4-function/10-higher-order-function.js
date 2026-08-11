// Problem 10
// Write a higher-order function called `createMultiplier` that takes a number `x` as input.
// It returns a new function that takes a number `y` and returns `x * y`.
//
// Example:
// const double = createMultiplier(2);
// console.log(double(5)); // Expected output: 10
//
// const triple = createMultiplier(3);
// console.log(triple(4)); // Expected output: 12


function createMultiplier(x) {
    function solve(y) {
        return x * y;
    };
    return solve;
}

const double = createMultiplier(2);
console.log(double(5));