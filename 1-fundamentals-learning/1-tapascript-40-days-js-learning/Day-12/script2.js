// static method... start from 45:20

// Object.assign()

const target = {p:1, a:2};
const source = {a:3, b:4};

const returnObj = Object.assign(target, source);
console.log(returnObj)

const Obj1 = {name: "rejo"};
const Obj2 = Object.assign({}, Obj1);

console.log(Obj2);


// object to array

const myObj = {
    a: "reze",
    b: 32
};

const myArr = Object.entries(myObj);
console.log(myArr);

// convert map or array to object

const entries = new Map([
    ["foo", "bar"],
    ["baz", 33]
]);

const objEntries = Object.fromEntries(entries);
console.log(objEntries);


// freeze()

const emp = {
    sal: 100
}
Object.freeze(emp);

emp.sal = 200; // check
console.log(emp) // still 100

console.log(Object.isFrozen(emp)); // true


// seal() methods.....

const dept = {
    name: "CSE"
}
Object.seal(dept);

dept.address = "Dhaka";  // no change
delete dept.name;  // no change

dept.name = "EEE"; // change to EEE

console.log(dept); 


// hasOwn() ...........
console.log(Object.hasOwn(dept, "name")); // true
console.log(Object.hasOwn(dept, "roll"));//false

