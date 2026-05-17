// topic to learn

// Function declaration
// Function expression (basic idea)
// Arrow function
// Parameters & arguments
// Return statement
// Default parameters
// Callback function (basic usage)
// Higher-order function (basic idea)
// Function scope (local/global)
// Method (function inside object)


// 1 function declaration

function greet() {
    console.log("hello");
}
greet();

function add(a, b) {
    return a + b;
}
console.log(add(3, 4));

// Hoisting 
sayHello(); // but not recomended

function sayHello() {
  console.log("Hi");
}



// 2 function expression
// function store in a variable
const greety = function() {
    console.log("How are you?");
}
greety();


// 3 Arrow function

const greetty = () => {
    console.log("Arrow function");
}
greetty();

// one line
const added = (a, b) => a + b;
console.log(add(4,5));


// 4 parameters & Arguments

function sum(a,b) {  // parameters
    return a + b;
}

console.log(sum(2,4));  // arguments


// 5 return statement
// example
function ret(a,b) {
    return a - b;
    console.log("hi"); // never runs
}
console.log(ret(5, 3));


// 6 default parameters

function doSome(a, b = 10) {  // function test(a = 5, b) {} not work
    return a + b;
}
console.log(doSome(5))


// 7 Callback function (basic usage)
function grety(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Task completed");
}
grety("Rejo", done);

// in-line callback
function first(name, callBack) {
    console.log("HI " + name);
    callBack();
}
first("rejo", function() {
    console.log("complete");
});

// 8 Higher-order function (basic idea)
// 9 Function scope (local/global) done
// Method (function inside object) done
