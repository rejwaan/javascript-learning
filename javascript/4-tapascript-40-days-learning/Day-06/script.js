// function
console.log("Function ******");


// Define or Declare a Function
function printThis() {
    console.log("Print something");
}
// Call or Invoke a Function
printThis();


// Function as an Expression
let printMe = function() {
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

function calc(a, b=1) {
    return (2 * (a + b));
}

let output = calc(2);
console.log(output);



// Rst Parameter

function restpr(a, b, c, ...rst) {
    console.log(a,b,c,rst);
}
restpr(1,2,3,4,5,6,7,8,9,10);
