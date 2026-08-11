// module

import {add, sub, name, x, y} from "./math.js";

console.log(add(4, 6));
console.log(sub(5, 2));

console.log("His name is, ", name);

console.log(x-y);

// defaul export er jonno curlibrace lage na
// import greet from "./math.js";
// greet();

import sayHi from "./math.js";
sayHi();