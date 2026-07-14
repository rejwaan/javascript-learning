// static method... start from 45:20

// Object.assign()

const target = {p:1, a:2};
const source = {a:3, b:4};

const returnObj = Object.assign(target, source);
console.log(returnObj)

const Obj1 = {name: "rejo"};
const Obj2 = Object.assign({}, Obj1);

console.log(Obj2);