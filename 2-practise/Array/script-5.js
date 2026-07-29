// Array Manipulation methods

// 1 - slice()

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

let copyFruits = fruits.slice();
console.log(copyFruits);

let someFruits = fruits.slice(1, 3);
console.log(someFruits);


// 2 - splice()

// remove elements
let removed = fruits.splice(1, 2);
console.log(removed);
console.log("after remove",fruits);

// add elements
fruits.splice(1,0, "tomato", "potato");
console.log(fruits);

// replace elements
fruits.splice(1, 1, "carrot");
console.log("after replace grapes", fruits);


// add at end
fruits.splice(fruits.length, 0, "watermelon");
console.log("after add end",fruits);


// remove from end
fruits.splice(-1, 1);
console.log("after remove from end", fruits);



// 3 - concat()
console.log("concat------------------------");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

// combine 2
let combined2 = arr1.concat(arr2);
console.log("combine 2",combined2);

// combine 3
let combine3 = arr1.concat(arr2, arr3);
console.log("combine 3", combine3);

// combine individual values
let indicombine = arr1.concat(10, 11);
console.log("combine individual values", indicombine);


// join().............

let veg = ["tomato", "carrot", "brokli"];

console.log(veg.join("-"));
console.log(veg.join(""));


// split()

let text = "apple-banana-orange";

console.log(text.split("-"));


// reverse()..................

let nums = [1, 2, 3, 4, 5];

nums.reverse();
console.log(nums);


// sort()...............................

let newVeg = ["cocumber", "chilli", "tomato", "onion"];

newVeg.sort();
console.log(newVeg);

let newNums = [10,4,15,6,2,3];
console.log(newNums.sort()); // why wrong sort?

// correct is........

newNums.sort((a, b) => a-b);
console.log(newNums);  // that's right

newNums.sort((a, b) => b-a);
console.log(newNums);  // reverse sort