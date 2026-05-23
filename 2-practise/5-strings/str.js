// Strings are for storing text
// Strings are written with quotes

let text = "mango king";  // double quotes
let text2 = 'mangu queen';  // single quotes

let length = text.length;
console.log(length); // 10

//Escape Characters

let txt = "we are mango \"Aaam\" in bangladesh";
console.log(txt);

let txt2 = "this is \\ called backslash";
console.log(txt2);

console.log("this is \n new line");
console.log("this is \t horizontal tabulator");

console.log("this is \v vertical tabulator");

console.log("this is \f from feed"); // can't see anything changed, however.


// Template Strings ES6 

let txt3 = `this is
template 
string`;
console.log(txt3);