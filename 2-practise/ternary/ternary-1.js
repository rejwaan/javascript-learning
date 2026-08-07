// ternary operator

// basic example
let age = 14;
const checked  = age >= 18 ? "adult" : "child";
console.log(checked); 


// ternary + arrow function

const checkAge = age => 
    age >= 18 ? "Go" : "Stop";
console.log(checkAge(34));


// some more

const marks = 6;

const grade = 
    marks >= 80 ? "A" :
    marks >= 60 ? "B" : 
    marks >= 40 ? "C" :
    "Fail";

console.log(grade);