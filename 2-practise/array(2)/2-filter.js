// filter 

// example 1

const numbers = [1, 3, 4, 5, 6, 7, 8, 8];

const onlyEvens = numbers.filter(num => num%2 === 0);
console.log(onlyEvens);


// example 2

const nums = [34, 43, 24, 56, 23];

const bigNums = nums.filter(num => num > 30);
console.log(bigNums);


// filter with object's array 
// example 3

const users = [
    {name: "rejo", age: 33},
    {name: "sriti", age: 14},
    {name: "jonaki", age: 34}
]

const adults = users.filter(user => user.age > 18);
console.log(adults);


// map + filter
// example 4

const userss = [
    { name: "Rejo", age: 21 },
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 25 }
];

const adultsName = userss.filter(user => user.age > 18).map(user => user.name);
console.log(adultsName);