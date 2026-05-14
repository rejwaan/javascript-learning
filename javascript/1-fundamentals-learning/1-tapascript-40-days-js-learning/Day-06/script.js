// function
console.log("Function ******");


// Define or Declare a Function
function printThis() {
    console.log("Print something");
}
// Call or Invoke a Function
printThis();


// Function as an Expression
let printMe = function () {
    console.log("Print me..");
}
printMe();

console.log(printMe);


// parameters & arguments
function sum(a, b, c) {
    const result = a + b + c;
    // console.log(result);
    return result;
}
// sum(24, 7, 5);

let result = sum(1, 2, 3);

function double(x) {
    return 2 * x;
}

console.log(double(result));


// Default Parameters

function calc(a, b = 1) {
    return (2 * (a + b));
}

let output = calc(2);
console.log(output);



// Rest Parameter

function restpr(a, b, c, ...rst) {
    console.log(a, b, c, rst);
}
restpr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// nested function

function outer() {
    console.log("Outer");

    return function inner() {
        console.log("inner");
    }

    // inner();
}

let retFunc = outer();
console.log(retFunc);


// callback function

function foo(func) {
    console.log("foo");

    func();
}

// way 1

// foo(function() {
//     console.log("buz");
// })


// way 2
const buz = function () {
    console.log("buz");
}

foo(buz);



// Pure function

let greetingMsg = "Hola ";

function greeting(name) {
    return greetingMsg + name;
}

console.log(greeting("Rejo"));
console.log(greeting("Rejo"));

greetingMsg = "salam ";
console.log(greeting("Rejo"));



// Higher Order Function


function getCamera(camera) {
    camera();
}

getCamera(function () {
    console.log("sony");
})

//
function returnFunc() {
    return function () {
        console.log("Hello")
    }
}

const retFun = returnFunc();
retFun();



// Arrow Function

// let greetMe = () => {
//     console.log("Helloo");
// }

let greetMe = (greetingMsg) => {
    // multiple case
    return greetingMsg + "  Great";
    
}
console.log(greetMe("holaaa"));


// IIFE (Immediately Invoked function expression)

(function(count) {
    console.log("IIFE", count);
})(12)


// call stack (explained in video by grafic)


// Recursion

// function foo() {
//     foo();
// }

function water(count) {
    console.log("water...", count);
    if (count === 0) {
        console.log("no more water is left to fetch");
        return;
    }
    water(count - 1);
}
water(5);