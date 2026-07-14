// Objects and object manipulation

// create object
let user = {
    name: "rejo",
    age: 21,
    "is admin": true
};

console.log(user.name);  // rejo
console.log(user.age);  // 21

// add more porperties in this objects
user.inSeinorCitizen = false;
user["movie lover"] = true;

console.log(user);
console.log(user["is admin"]);

// modify value..
user.age = 22;
user.name = "rezesu";
user["movie lover"] = false;

console.log(user);


// delete property.....
// delete user["movie lover"];
// delete user.age;
console.log(user);


// accessing dynamic key value...
const someKey = "age";

console.log(user[someKey]); // 22


// create object with dynamic value....
// let car = prompt("which is your fav car?");

// let favCars = {
//     [car]: 5
// }

// console.log(favCars);

// construction function.........
// construction function first letter should be capital letter. -this is best practice.

function Car(name, model) {
    this.name = name;
    this.model = model;
}

const supraCar = new Car("Supra", "k5");
const audiCar = new Car("Audi", "A8");
console.log(supraCar);
console.log(audiCar);

console.log(supraCar instanceof Car);
console.log(audiCar instanceof Car);


// using object constructor....
// less and rarely use it.
const person = new Object();
person.name = "Alpha";
person.age = 44;
console.log(person);

// factory function..............
function createUser(name, age) {
    return {
        name,
        age
        // greet() {
        //     console.log(this)
        // }
    }
}

const user1 = createUser("rejo", 21);
const user2 = createUser("raze", 20);

console.log(user1);
console.log(user2);


// object methods ...........
// nested object .......
// the "in" operator .....

let profile = {
    name: "reze",
    company: "CO",
    message: function () {
        console.log(`${this.name} work at ${this.company}`);
    },
    address: {
        city: "Dhaka",
        country: "BD",
        greeting: function () {
            console.log(`You are from ${this.city}, ${this.country}.`)
        }
    },
    salary: undefined
}

// for .... in
for (let key in profile) {
    console.log(key);
    console.log(profile[key]);
}

console.log(Object.keys(profile));

// wrong way to check 
console.log(profile.salary); // undefined
if (!profile.salary) {
    console.log("the salary property doesn't exist");
}


// write way to check using "in" operator..
console.log("salary" in profile); // true


console.log(profile.address.country); // BD
profile.address.greeting();

console.log(profile.name); // reze
console.log(profile.company); // CO

profile.message();


// object reference

let fruit = {name: "mango"};
const fruit2 = {name: "mango"};

console.log(fruit == fruit2); // false
console.log(fruit === fruit2); // false

fruit = fruit2;

console.log(fruit === fruit2); // true