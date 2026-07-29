// Object Methods & Operations--

// Object.keys() - Object.values() - 
// Object.entries() - Object.assign() - 
// hasOwnProperty()
 
let user1 = {
  name: "Rahim",
  age: 25,
  city: "Dhaka",
  isActive: true
};

let keyss = Object.keys(user1);
console.log(keyss);

let valuess = Object.values(user1);
console.log(valuess);

let entriess = Object.entries(user1);
console.log(entriess);

// assign ----

// copy
let user2 = {name: "raju", age: 20};
let copyUser2  = Object.assign({}, user2);
console.log(copyUser2);
console.log(user2 === copyUser2); // false

// merge
let user3 = {city: "dhaka", citizen: "bd"};
let user2and3 = Object.assign({}, user2, user3);
console.log(user2and3);

// override
let obj1 = {a: 1, b: 3};
let obj2 = {b: 2, c: 4};
let obj1obj2 = Object.assign({}, obj1, obj2);
console.log(obj1obj2);

// shallow copy
let original = { name: "Rahim", address: { city: "Dhaka" } };
let shallowCopy = Object.assign({}, original);
shallowCopy.address.city = "Chittagong";
console.log(original.address.city); // chitta...
console.log(original === shallowCopy); // false
console.log(original.address === shallowCopy.address); // true


// hasOwnProperty()---------

let person = {
  name: "Reze",
  age: 25
};

console.log(person.hasOwnProperty("name"));//true
console.log(person.hasOwnProperty("age"));// true
console.log(person.hasOwnProperty("city"));//fals
console.log(person.hasOwnProperty("state"));//fal