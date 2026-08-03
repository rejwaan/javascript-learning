// function basic

function makeJuice(fruit) {
    return fruit + " juice";
}

console.log(makeJuice("mango"));
console.log(makeJuice("Pineapple"));


// cal before declaration

sayHello("Hello");

function sayHello(parameters) {
    console.log(parameters);
}



// function expression

const fruits = function(fruit1, fruit2) {
    console.log(fruit1, fruit2);
};

fruits("mango", "banana");



//=========================================

// arrow function (ES6)

// syntax
const functionName = (parameters) => {
  // code
  return value;
};

// example

const foods = (food1, food2) => {
    return `${food1} ${food2}`;
}

console.log(foods("burger", "pizza"));


// one liner ..

const saySome = (say) => say;
console.log(saySome("this is good fruit"));


// single parameter

const againSome = say => say;
console.log(againSome("again this is good fruit"));


// no parameter

const say2 = () => "Hi, this is no parameter";
console.log(say2());


// multiple parameters

const say3 = (a, b) => a + b;
console.log(say3(1, 5));


// =============================================
// arrow function vs regular function 

// Regular Function (Function Declaration)
function adds(a, b) {
  return a + b;
}

// Regular Function (Function Expression)
const addss = function(a, b) {
  return a + b;
};

// Arrow Function (Shorter)
const addsss = (a, b) => a + b;

//==============================================


// parameters and arguments

function Names(para1, para2) {
    return para1 + para2;
}
console.log(Names(3, 5)); // arg1 and arg2


// rest parameters(...)

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(2,3,4,5,6,2));
console.log(sum(45,24,23,11,34,211,42,4523));



// return 

function returns() {
    return "Hi";
    console.log("hello"); // do not exicute
}

console.log(returns());