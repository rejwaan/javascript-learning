// closure

// function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));


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



// ..

function baba(hasBairerlokerinput) {
    var bari = "ShantiNiketon";

    function chele() {
        if (!hasBairerlokerinput) {
            bari = "AnondoNikaton";
        }

        // var scooter = "Activa";
        console.log(bari);
    }
    chele();
}

baba(true);

//......

function Baba() {
    var bari = "Shantiniketon";

    return function Chele() {
        bari = "AnondoNiketon.";
        var scooter = "Activa";
        console.log(bari);
    }
    // chele();
}

const amarChele = Baba();
amarChele();




// example..............

function Outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }

    x = 20;
    return inner;
}

var innerFunction = Outer();
innerFunction();

// output:20


// IIFE;..............
// define and execute in one area
(function x(a) {
    console.log(a);
})(123);   // 123       

// example....
(function outer(x) {
    return (function inner(y) {
        console.log(x);
    })(105);
})(100);
// output: 100



// solving with var and let;

let count = 0;
(function logCount() {
    if (count == 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();


// closure and loop............

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}