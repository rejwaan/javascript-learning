// this keyword in object - basic

// example 

let person = {
    named: "rejo",
    age: 34,

    greet: function() {
        console.log(this.named, this.age);
    }
};

person.greet();  // rejo 34

//// use one method in multiple object

function getInfo() {
    return this.named + this.age;
}

person1 = {
    named: "babul",
    age: 35,
    getInfo: getInfo
}

person2 = {
    named: "sujon",
    age: 45,
    getInfo: getInfo
}

console.log(person1.getInfo());
console.log(person2.getInfo());