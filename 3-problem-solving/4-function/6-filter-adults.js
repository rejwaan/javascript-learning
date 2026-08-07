// Problem 6
// Write a function that takes an array of ages and returns only the ages
// that are 18 or above (adults).
//
// Input: [15, 22, 17, 18, 30, 12, 25]
// Expected output: [22, 18, 30, 25]
//
// Input: [10, 12, 15]
// Expected output: []


function filterAdults(ages = []) {
    const check = ages.filter(age => age >= 18);
    return check;
}

console.log(filterAdults([15, 22, 17, 18, 30, 12, 25]));