// Problem 6
// Write a function that updates the city of a nested address object.
//
// Input object:
// const employee = {
//     name: "Sadia",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Old City",
//         zip: 1000
//     },
//     department: "IT"
// };
//
// Update city to: "New City"
//
// Expected output:
// {
//     name: "Sadia",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New City",
//         zip: 1000
//     },
//     department: "IT"
// }


const employee = {
    name: "Sadia",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Old City",
        zip: 1000
    },
    department: "IT"
};

employee.address.city = "New City";
console.log(employee);