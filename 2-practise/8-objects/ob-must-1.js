// 01 - Object Literal.............


const book = {
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
}


// 02 - Access Property ................

const student = {
    name: "Rejo",
    age: 21,
    city: "Dhaka",
    isStudent: true
};

console.log(student.name);
console.log(student.age);
console.log(student["city"]);
console.log(student["isStudent"]);


// 03 - Add / Modify / Delete Property ........

const phone = {
    brand: "Samsung",
    price: 30000
};

phone.color = "Black";
phone.price = 28000;
delete phone.brand;

console.log(phone);



// 04 - Dynamic Key....................

const person = {
    name: "Rejo",
    city: "Dhaka",
    age: 21
};

const key = "city";

console.log(person[key]);



// 05 - Object Shorthand..................

const brand = "Toyota";
const model = "Supra";
const year = 2024;

const car = {
    brand,
    model,
    year
};

console.log(car);