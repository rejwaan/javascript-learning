// closure

// function
function sum(a, b){
    return a+b;
}
console.log(sum(2,4));


// inner function.....
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
    }
    inner();
}
outer();


// 2nd method to call inner
function outer() {
    console.log("outer");
    return function inner() {
        console.log("inner");
    }
}

outer()(); // call this two function

const innerFunc = outer();
innerFunc(); // this is the other way
