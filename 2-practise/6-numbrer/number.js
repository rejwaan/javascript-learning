// number

let x = 4;
let y = 5;
console.log(x + y); // 9

x = "5";
y = "5";
console.log(x + y);  // 55

x = "6";
y = "str";
console.log(x + y); // 6str

x = 7;
y = "str";
console.log(x + y); // 7str

x = "100";
y = "10";
console.log(x - y);  // 90

console.log(100 / "10"); // 10

console.log(200 / 0); // Infinity

console.log("hi" / 10); // NaN

console.log(isFinite(2e308)); // false (thats means , its an infinite number)