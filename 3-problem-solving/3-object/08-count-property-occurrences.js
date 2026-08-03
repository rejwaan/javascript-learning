// Problem 8
// Write a function that counts how many times each property value appears in an array of objects.
//
// Input array:
// const people = [
//     { name: "Rahim", city: "Dhaka" },
//     { name: "Karim", city: "Chittagong" },
//     { name: "Sadia", city: "Dhaka" },
//     { name: "Tamim", city: "Sylhet" },
//     { name: "Nadia", city: "Dhaka" }
// ];
//
// Count occurrences of each city:
// Expected output:
// {
//     Dhaka: 3,
//     Chittagong: 1,
//     Sylhet: 1
// }


const people = [
    { name: "Rahim", city: "Dhaka" },
    { name: "Karim", city: "Chittagong" },
    { name: "Sadia", city: "Dhaka" },
    { name: "Tamim", city: "Sylhet" },
    { name: "Nadia", city: "Dhaka" }
];

const cityCount = people.reduce((acc, person) => {
    const city = person.city;

    if(acc[city]) {
        acc[city] += 1;
    }
    else {
        acc[city] = 1;
    }
    return acc;
}, {});

console.log(cityCount);