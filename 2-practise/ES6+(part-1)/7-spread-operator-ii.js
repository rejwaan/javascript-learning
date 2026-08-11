// Object spread - copy, merge, update

let obj1 = { name: "Reze", age: 25 };
let obj2 = { city: "Dhaka", country: "BD" };


// copy 
let copy = {...obj1};
console.log(copy);

// merge
let merged = {...obj1, ...obj2};
console.log(merged);

// add new property
let withcity = {...obj1, city: "silet"};
console.log(withcity);

// update existing property
let updated = {...obj1, age: 34};
console.log(updated);

// nested object spread - skip it now

// Order matters (override)
let a = {x: 1, y: 2};
let b = {y: 3, z: 4};
console.log({...a, ...b});
console.log({...b, ...a});