// spread operator - (...)

// simple example 
let arr = [1,2,3];
console.log(...arr);


// Array spread - copy, merge, add

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//copy
let copy = [...arr1];
console.log(copy);

//merge
let merged = [...arr1, ...arr2];
console.log(merged);

//add elements at end
let withEnd = [...arr1, 4, 5];
console.log(withEnd);

//add elements at start
let startWith = [-1, 0, ...arr1];
console.log(startWith);

// insert in middle - (not need now)

//string to Array
let str = "hello";
let chars = [...str];
console.log(chars);