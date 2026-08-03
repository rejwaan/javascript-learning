// map()


// example 1
let nums = [1, 2, 3];

let doubleNums = nums.map(num => num * 2);
console.log(doubleNums); // [2, 4, 6]

// example 2

const users = [
    { name: "rejo", age: 23},
    { name: "reze", age: 34}
]

const names = users.map(user => user.name);
console.log(names);

const ages = users.map(user => user.age);
console.log(ages);