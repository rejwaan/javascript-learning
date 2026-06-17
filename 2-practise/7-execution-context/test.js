// call stack example

// example 1

console.log("Start");

function greet() {
    console.log("Hello");
    bye();
    console.log("Greet End");
}

function bye() {
    console.log("Bye");
}

greet();
console.log("End");

// output..
/* 
1. Start
2. Hello
3. Bye
4. Greet End
5. End

*/


// example 2

function first() {
    console.log(1);
    second();
    console.log(3);
}

function second() {
    console.log(2);
    third();
}

function third() {
    console.log(4);
    console.log(5);
}

first();
console.log(6);

// output..
/* 
1
2
4
5
3
6

*/



// example 3

console.log("A");

function show() {
    console.log("B");
    display();
    console.log("C");
}

function display() {
    console.log("D");
    console.log("E");
}

show();
console.log("F");

// output..
/* 
A
B
D
E
C
F

*/


// example 4

function apple() {
    console.log("Apple");
    banana();
    console.log("Apple End");
}

function banana() {
    console.log("Banana");
    cherry();
    console.log("Banana End");
}

function cherry() {
    console.log("Cherry");
    console.log("Cherry End");
}

console.log("Start");
apple();
console.log("Finish");

// output..
/* 
Start
Apple
Banana
Cherry
Cherry End
Banana End
Apple End
Finish
*/

var x = 10;

function outer() {
    console.log(x);
    var x = 20;
    console.log(x);
    
    function inner() {
        console.log(x);
        var x = 30;
        console.log(x);
    }
    inner();
}

outer();
console.log(x);