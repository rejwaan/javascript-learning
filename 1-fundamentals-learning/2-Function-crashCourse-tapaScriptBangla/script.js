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