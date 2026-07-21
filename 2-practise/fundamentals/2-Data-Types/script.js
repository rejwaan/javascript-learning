// data types --

// Primitive data types--

// 1. String
let name = "John";

// 2. Number
let integer = 10;
let float = 2.13;
let negative = -4;
let bigNumber = 1e6;
let infinity = Infinity;
let notANumber = NaN;

console.log(10/0);
console.log(notANumber);
console.log(infinity);
console.log(bigNumber);


// 3. Boolean 
let isStudent = true;
let isOkey = false;


// 4. Undefined
let x;
console.log(x); // undefined


// 5. Null
let user = null;
console.log(user); // null

// 6. Symbol (ES6)
let sym = Symbol("id");
console.log(sym);
console.log(typeof sym);

// 7. BigInt (ES2020)
let bigInt = 133344423535325242n; // add n 
console.log(typeof bigInt); // bigint
console.log(bigInt);

let bigInt2 = bigInt(483497949223278292);


// Non - Primitive data types
// Object , Array , Function