// forEach

// its doesn't creat new array**

// example 1

const nums = [1, 2, 3];

nums.forEach(num => {
    console.log(`this is num: ${num}`);
    console.log(num * 2);
});


// example 2 

const fruits = ["Mango", "Cherry", "Apple"];

fruits.forEach(fruit => {
    console.log(`I like ${fruit}`);
});


// forEach with object array
// example 3 

const users = [
     { name: "Rejo", age: 23 },
     { name: "Reze", age: 34 }
]

users.forEach(user => {
    console.log(user.name);
});