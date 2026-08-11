// Problem 6
// Write a function that takes an object and returns a new object with an additional property 'country'.
// Use the spread operator to copy the original object.
//
// Input: { name: "Rahim", age: 25 }, country = "Bangladesh"
// Expected output: { name: "Rahim", age: 25, country: "Bangladesh" }
//
// Input: { name: "Sadia", city: "Dhaka" }, country = "India"
// Expected output: { name: "Sadia", city: "Dhaka", country: "India" }


function inputs(obj, country) {
    let copy = {...obj, country};
    return copy;
}

console.log(inputs({name: "Sadia", city: "Dhaka"}, country = "Bangladesh"));