// Renaming (Alias)

let person = {
    name: "bob",
    age: 32
};

let {name: userName, age: userAge} = person;

console.log(userAge);
console.log(userName);
// console.log(age);  //error: age is not defined


// Nested destructuring...

// Nested Object
let user = {
  name: "John",
  address: {
    city: "Dhaka",
    country: "BD",
    zip: {
      code: 1216,
      area: "Mirpur"
    }
  }
};

// nested...
let {name, address: {city, country}} = user;
console.log(name);
console.log(city);
console.log(country);

// deeper nested...

let{address: {zip: {code, area}}} = user;
console.log(code);
console.log(area);


// Nested Array ...
let matrix = [1, [2, 3], 4];
let [num1, [num2, num3], num4] = matrix;
console.log(num1 + num2);
console.log(num3 + num4);