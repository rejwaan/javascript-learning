// Problem 7
// Write a function that converts an array of key-value pairs into an object.
//
// Input array:
// const pairs = [
//     ["name", "Rahim"],
//     ["age", 25],
//     ["city", "Dhaka"],
//     ["profession", "Engineer"]
// ];
//
// Expected output:
// {
//     name: "Rahim",
//     age: 25,
//     city: "Dhaka",
//     profession: "Engineer"
// }


const pairs = [
    ["name", "Rahim"],
    ["age", 25],
    ["city", "Dhaka"],
    ["profession", "Engineer"]
];

const newObj = Object.fromEntries(pairs);
console.log(newObj);
