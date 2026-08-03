// Problem 4
// Write a function that merges two objects into one.
// If both objects have the same property, the second object's value should overwrite the first.
//
// Input objects:
// const obj1 = {
//     name: "Rahim",
//     age: 25,
//     city: "Dhaka"
// };
//
// const obj2 = {
//     age: 30,
//     country: "Bangladesh",
//     profession: "Engineer"
// };
//
// Expected output:
// {
//     name: "Rahim",
//     age: 30,
//     city: "Dhaka",
//     country: "Bangladesh",
//     profession: "Engineer"
// }



const obj1 = {
    name: "Rahim",
    age: 25,
    city: "Dhaka"
};

const obj2 = {
    age: 30,
    country: "Bangladesh",
    profession: "Engineer"
};

const mergeObjects = {...obj1, ...obj2};
console.log(mergeObjects);

// 2nd way
// const mergeObjects = Object.assign({}, obj1, obj2);