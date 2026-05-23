console.log("strings methods ******");

// javascript most used methods..


let str = "abcdefghijklmnopqrstuvwxyz";

// length
console.log(str.length); // 26

// charAt()
console.log(str.charAt(4)); // e

// slice()
console.log(str.slice(4, 15)); // efghijklmno 

// toUpperCase()
console.log(str.toUpperCase()); // ABCDEFGHIJKL..

// toLowerCase()
console.log(str.toLowerCase()); // abcdefghijkl..

// trim()  remove white space from both sides
console.log(str.trim()); // 

// replace()
console.log(str.replace("abcd",  "ABCD")); // ABCDefghijkl...

// split() [string to array]
console.log(str.split(""));

// concat() add 2 strings
let str2 = "this is the alphabet of English letter";
console.log(str.concat(" ", str2));

// repeat()
console.log(str.repeat(2));