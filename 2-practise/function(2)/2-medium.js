// function medium to advanced
//============================================

// default parameters

// code example ..

function greets(name = "user") {
    return `Hello ${name}`;
}

console.log(greets()); // Hello user
console.log(greets("rejo")); // Hello rejo

// multiple parameters

function sum(a = 1, b = 0) {
    return a + b;
}

console.log(sum(3)); // a=3, b=0
console.log(sum(2, 5)); //  a=2, b=5


// default parameters with expression

function calculator(price, tax = price * 0.1) {
    return price + tax;
}

console.log(calculator(500)); // 550
console.log(calculator(432)); // 475.2

//=============================================

//=============================================

// callback function 
//Callback Function = এমন একটি function যেটিকে অন্য function-এর argument হিসেবে পাঠানো হয় এবং সেই function পরে তাকে call করে।
// example

function greetss(callback) {
    callback();
}

function sayHello() {
    console.log("Hello");
}

greetss(sayHello);


// example 2..

function doSomething(callback) {
    console.log("Work finished");

    callback();
}

function sayHi() {
    console.log("HI");
}

doSomething(sayHi);

/////////////////////////////////////////
//

/*  normal callback==========

function greet(callback) {
    console.log("Inside greet()");
    callback();
}

function sayHello() {
    console.log("Hello");
}

greet(sayHello);

*/

// callback with arrow

function greet(callback) {
    console.log("finished");
    callback();
} 

greet( () => {
    console.log("OK bye");
})

// output:
// finished
// OK bye