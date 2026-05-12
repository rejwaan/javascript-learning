console.log("Conditional ternary operator *******");

// condition ? val1 : val2

let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Non Senior Citizen");



// Bitwise operators
console.log("Bitwise Operator....");

// 10 in decimal
// 10 in 32 bits representation of 0, 1

// & | ^ ~ << >>

// 15 & 9 = 9          
// 1111 & 1001 = 1001

// 15 | 9 = 15
// 1111 | 1001 = 1111

// 15 ^ 9 = 6
// 1111 ^ 1001 = 0110


// 9 << 2 = 36
// 1001 << 2 = 100100

// 9 >> 2 = 2
// 1001 >> 2 = 0010



// Grouping
console.log("*** Grouping ***");

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r);    // 7 
console.log(p + (q * r));  // 7
console.log((p + q) * r);  // 9


// typeof
console.log("*** typeof ***");

console.log(typeof "Rejo");  // string
console.log(typeof false);   // boolean
console.log(typeof 4);       // number

const numbers = [1,2,3,4];
console.log(typeof numbers);   // object

console.log(typeof null);        // object
console.log(typeof undefined);   // undefined
console.log(typeof NaN);         // number


// instanceof
console.log("*** instanceof ***");

let arr = [1,2,3,4,5,6];
console.log(arr instanceof Array);  // true