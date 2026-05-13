console.log("day 03");

// operator - Symbol + - * /
// operands - x+y, x and y are the operands.
// expression - x = 2 / 3 + 4


// Arithmetic Operator **************

let a = 10;
let b = 20;

console.log(a+b); //  30
console.log(a-b); // -10
console.log(b-a); //  10
console.log(a*b); //  200
console.log(a/b); //  0.5


let f_name = "Rejo";
let l_name = " rusu";

console.log(f_name + l_name); // right but not recomended


console.log(a ** b);

let c = 12;
let d = 5;

console.log(12%5);

// 

let count = 5;
//console.log(count++); // count = count + 1
//console.log(count);  // 6

//console.log(++count); // count = count + 1 


console.log(count--);  // count = count - 1
console.log(--count);  // count = count - 1




// Assignment Operators **************
console.log("Assignment Operators");

let x = 10;
x += 5;  // x = x + 5 (15)
x -= 3;  // x = x - 3 (12)
x *= 2;  // x = x * 2 (24)
x /= 4;  // x = x / 4 (6)

console.log(x); 




// Comparison Operators ******************
console.log("Comparison Operators");

console.log(4 == 5);    // false
console.log(0 == false); // true
console.log(3 == '3');   // true
console.log(3 != '3');   // false

console.log(3 === '3');   // false
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

// NaN = Not a Number

let opj1 = {'name': 'rejo'}; // AA00
let opj2 = {'name': 'rejo'}; // AA11

console.log(opj1 === opj2);  // false
console.log(opj1 !== opj2);  // true

// others .....
console.log(1 > 7); // false
console.log(2 >= 2); // true

console.log(2 < 7); // true




// Logical Operators ****************
console.log("Logical Operators ********")
// && || ?? !

// op1 && op2
console.log(false && false); // false
console.log(true && false);  // false
console.log(true && true);   // true
console.log(false && true);  // false

// check op1. if op1 is false then return op1
//            if op1 is true then return op2

console.log("Cow" && "Horse"); // Horse
console.log('' && true);      // ''
console.log(null && true);  // true

console.log(4>5 && 4===6);  // false

console.log("hen" && 5>4);  // true


// || Logical or
console.log(false || false); // false
console.log(true || false);  // true
console.log(true || true);   // true
console.log(false || true);  // true

// check op1. if op1 is true then return op1
//            if op1 is false then return op2
console.log("Cow" || "Horse"); // Cow

console.log(!true); // false
console.log(!false); // true




// ??
// op1 ?? op2
// when it is null or undefined then return op2
// otherwise it is return op1

let a1 = null ?? 1;
let a2 = undefined ?? 3

console.log(a1);  // 1
console.log(a2);  // 3

console.log("Rejo" ?? "Guest"); // Rejo

const a4 = 0 ?? "Rejo";
console.log(a4);  // 0