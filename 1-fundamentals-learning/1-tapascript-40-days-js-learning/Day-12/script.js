// Objects

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

class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}

const supraCar = new Car("Supra", "k5");
const audiCar = new Car("Audi", "A8");
console.log(supraCar);
console.log(audiCar);

console.log(supraCar instanceof Car);

// using object constructor....
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