// console.log("Day 02");

// variables:

let fruit = "mango";
fruit = "kiwi";
console.log(fruit);

let vegetable = "carrots";

fruit = vegetable;

console.log(fruit);         // carrots
console.log(vegetable);     // carrots

// naming variable

let $ = "dollar";
console.log($);

let _ = "hi";


// var, let, const 

// var = it's can be redeclared (not recomended)
var address = "bd";
console.log(address);   

var address = "uk";
console.log(address);

// let = can be reassigned
// const = block scoped, cannot be reassigned

/* 
** Primitive data types:
string
number
boolean
undefined
null
bigIng
symbol

**non primitive
object
array
function
*/

function sayName() {
    const name = "someName";
    console.log("the name is, ", name);
}

sayName();


// task

const name = "rejo";
let age = 21;
let isStudent = true;
const favouriteProgrammingLanguage = "Python";

console.log(name);
console.log(age);
console.log(isStudent);
console.log(favouriteProgrammingLanguage);

// name = "roki";
age = 22;
isStudent = false;
favouriteProgrammingLanguage = "javaScript";

