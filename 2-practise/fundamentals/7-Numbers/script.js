// Numbers

// practice.............
console.log(0.2 + 0.3);

console.log((0.4 * 10 + 0.3 * 10) / 10);

console.log(123e5);
console.log(123e-5);

// js use the + operator for both addition and concatenation.
console.log(4+4);  // 8
console.log("4" + "4");  // 44

console.log("4" + 5);  // 45
console.log(4 + "5");  // 45

console.log("result: " + 10 + 10);// result: 1010

console.log("result: ", 10 + 10);// result: 20

console.log(10 + 10 + "10"); // 2010
console.log("10" + 10 + 10); // 101010

// in js, the + operator use in concat in str but the - / * use to numeric operation in str.

// NaN

console.log(10 / "a"); // NaN

let x = 20 * "b";
console.log(isNaN(x)); // true


// Numbers Methods ...........................

// basic methods....

// toString()
const num = 200;
const result = num.toString();
console.log(result); // 100
console.log(typeof(result)); // number

// toFixed()
const price = 99.4843;
console.log(price.toFixed(2)); // 99.48


// static number methods.......

// Number.isInteger()
console.log(Number.isInteger(10));  // true
console.log(Number.isInteger(2.3)); // false

// Number.isNaN()
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN(100));   // false

// Number.isFinite()
console.log(Number.isFinite(100));      // true
console.log(Number.isFinite(Infinity)); // false

// Number.parseInt()
const value = "34p";
console.log(Number.parseInt(value));  // 34

// Number.parseFloat()
const value2 = "34.5x";
console.log(Number.parseFloat(value2)); // 34.5