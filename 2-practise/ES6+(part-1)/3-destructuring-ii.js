// Object destructuring....

let person1 = {
    name: "John",
    age: 34,
    city: "dhaka"
};

// basic destructuring 

let {name, age, city} = person1;
console.log(name, ",", age, ",", city);

// specific property

let {name: userName} = person1;
console.log(userName); // John

// rest pattern.

let {name: n, ...rest} = person1;
console.log(n);
console.log(rest);

//==============================================

// Default values -------------------

// Array default..
let colors = ["red"];
let [first = "yellow", second ="purple"] =colors;

console.log(first); // 
console.log(second); // 


// Object default..

let person2 = {names: "bob"};
let {names = "user", ages = 34, citys = "dhaka"} = person2;

console.log(names);
console.log(ages);
console.log(citys);