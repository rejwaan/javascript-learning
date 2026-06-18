// scope & scope chain

// global scope
// local scope or functional scope
// block scope

// in global var, its doesn't matter the declaretion var or let or const.
const globalvar = "this is a global variable";   // global variable

function dosomething() {
    const say = "hey, hi";  // local or functional variable

    console.log(globalvar); // valid
    console.log(say);  // valid
}

dosomething();
//console.log(say); // say is not defined cause its  a local var. 



// local scope.................

function saysomething() {
    var count = 10;
    //console.log(count);
}
// saysomething();
//console.log(count); // undefined 'error'

// not recommended...............
xx = 49; // correct but not recommended
console.log(xx);

var y = 50;  // not recommended
console.log(y);


// shadowing...................

var greeting = "hello";

function show() {
    var greeting = "hi";

    console.log(greeting); // hi
}

show();
console.log(greeting); // hello


// block scope..................

{
    let x = 30;
}
// console.log(x); // error. x is not defined

if (true) {
    let x = 40;
    console.log(x); // 40
}
// console.log(x); // error. x is not defined


// but but but.....
if (true) {
    var x = 44;  // var is not block scope
}
console.log(x); // 44


// scope chain...........................

function jerry() {
    console.log(name);
}

function tom() {
    var name = 'tom';
    jerry();
}

var name = 'cartoon';

tom();

// output: cartoon


// example 2

var count = 10;

function outer() {
    var count = 20;

    function inner() {
        var count = 30;
        console.log(count);
    }

    inner();
    console.log(count);
}

outer();
console.log(count);

// output:
// 30
// 20
// 10