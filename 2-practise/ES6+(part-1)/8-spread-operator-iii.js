// function call spread

function add(a, b, c) {
    return a+b+c;
}

let numbers = [1, 2, 3];

let result = add(...numbers);
console.log(result);

// Math functions

let nums = [5, 10, 15];
console.log(Math.max(...nums));

// push
let arr = [1, 2];
let newArr = [3, 4];
arr.push(...newArr);
console.log(arr);

//======================================

// shallow copy 
// nested array...

let original = [1, 2, [3, 4]];
let copy = [...original];

console.log(copy);

copy[0] = 10;
copy[2][1] = 40;

console.log(original);
console.log(copy);


// nested object...

let user = {
    name: "John",
    address: {city: "dhaka"}
};

let copyUser = {...user};
console.log(copyUser);

copyUser.address.city = "cumilla";

console.log(user);
console.log(copyUser);

// deep copy Json - skip now