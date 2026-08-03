// Problem 3
// Write a function that checks if a specific property exists in an object.
// Return true if exists, false if not.
//
// Input object:
// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "Silver"
// };
//
// Check for property: "model"
// Expected output:
// true
//
// Check for property: "price"
// Expected output:
// false


const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver"
};

console.log("model" in car);
console.log("price" in car);
console.log(car.hasOwnProperty("color"));