// 06 - Object Methods................

const address = {
    name: "Rejo",
    age: 21,
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(address.introduce());



// 07 - nested objects................

const student = {
    name: "Rejo",

    school: {
        name: "ABC School",
        city: "Dhaka"
    }
};

console.log(student.school.name);
console.log(student.school.city);


// 08 - for...in loop...................

const car = {
    brand: "Toyota",
    model: "Supra",
    year: 2024
};

for (let c in car) {
    console.log(c, car[c]);
}



// 09 - Object.keys()............

const product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

const allProducts = Object.keys(product);
console.log(allProducts);



// 10 - Object References --- most important****

const obj1 = {
    city: "Dhaka"
};

const obj2 = obj1;

obj2.city = "Khulna";

console.log(obj1.city);
console.log(obj2.city);