// javascript object

let student = {
    name: "rejo",
    roll: 37,
    department: "cst",
    isGoodStudent: "no"
};

console.log(student);
console.log(student.name);

// add, modify, remove....

student.age = 21;
console.log(student);

// modify..
student.isGoodStudent = "yes";
console.log(student)

// remove..
delete student.department;
console.log(student)



// accessing dynamic key value...

const input = "name";

console.log(student[input]);

// if "name" name key not found then it will print - undefined.



// create object with dynamyc value......

//let fruit = prompt("which is your favourite fruit?");

//let favFruit = {
//    [fruit]: "is a good fruit."
//};

//console.log(favFruit);


// constructor function.....

function Data(name, roll) {
    this.name = name;
    this.roll = roll;
}

const student1 = new Data("rejo", 37);
const student2 = new Data("mehedi", 52);

console.log(student1);
console.log(student2);

// instanceof
console.log(student1 instanceof Data); // true
console.log(student2 instanceof Data); // true


// factory function....

function userData(name, roll) {
    return {
        name,
        roll
    }
}

const user1 = userData("rejo", 37);

console.log(user1)