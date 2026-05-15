const printMe = function() {
    console.log("Print me");
}

console.log(printMe);
printMe();


// arguments and parameters

function sum(a,b) {  /* parameters */
    return a+b;
}
const result = sum(1,3);  /* arguments */
console.log(result);


// default parameter

function cals(a, b=5) {
    return a + b;
}

const output = cals(4);
console.log(output);


// rest parameters

function count(x, ...y) {
    return {x, y};
}

const done = count(1,2,3,4,5,6,7);
console.log(done);


// Arrow function

const printthis = () =>{
    console.log('printing');
}
printthis();

// arrow function one line
const printt = (a) => console.log(a); //valid
printt(3);

// more short
const returnSomething = (a) => 2 * a;
console.log(returnSomething(5));

// this keyword (will be learn in future)
console.log(this);


// nested function
// scope & closure

function outer(x) {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
        return x * 5;
    }
    return inner();
}

const resul = outer(5);
console.log(resul);


// callback

function foo(buz) {
    const timeforbuz = true;
    if(timeforbuz) {
        buz();
    }
}

// foo(function() {
//     console.log("buz");
// });

// also write this way
function buz() {
    console.log("buz"); 
}
foo(buz);


// higher order function