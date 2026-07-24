// Strings

let str = "abcdefjhijklmnopqrstuvwxyz";
console.log(str.length); // 26


// methods..............

// charAt()
const text = "hello";
console.log(text.charAt(1)); // e

// at()
console.log(text.at(1));  // e
console.log(text.at(-1));  // o

// slice()
console.log(text.slice(0, 2)); // he

// substring()
console.log(text.substring(0, 4));  // hell

// toUpperCase(
console.log(text.toUpperCase());  // HELLO

// toLowerCase()
console.log(text.toLowerCase());

// trim()
console.log(text.trim());

// trimStart()
console.log(text.padStart());

// trimEnd()

// replace()
const say = "helllo";
console.log(say.replace("helllo", "Hi"));// Hi

// replaceAll()  // all match replace but replace() do only first match replace.

// split()
const txt = "HTML CSS JS";

const output = txt.split(" ");

console.log(output); // [ 'HTML', 'CSS', 'JS' ]


// strings search..........................

// indexOf()
const strr = "Hello JavaScript";
console.log(strr.indexOf("JavaScript")); // 6

// includes()
console.log(strr.includes("JavaS")); // true

// startsWith()
console.log(strr.startsWith("Hello")); // true

// endsWith()
console.log(strr.endsWith("pt")); // true

// lastIndexOf()
const says = "hello hello";
console.log(says.lastIndexOf("he")); // 6

// search()
console.log(says.search("he"));  // 0


// Escape Characters..............

console.log("line 1\nLine 2");
console.log("name:\tJohn");
console.log("It\'s John");
console.log("He said, \"Hi\"");
console.log("Path: c:\\users\\John");