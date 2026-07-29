// Add/Remove...
// push() pop() unshift() shift()

// push()...

let fruits = ["apple", "mango", "orange", "cherry"];

fruits.push("banana");
console.log(fruits);

fruits.push("pineapple", "jackfruits");
console.log(fruits);


// pop()...........

fruits.pop("jackfruits");
console.log(fruits);

fruits.pop();
console.log(fruits);  // remove last item

let popItem = fruits.pop();
console.log(popItem);
console.log(fruits);


// unshift().....................

fruits.unshift("grapes"); // add items in first position
console.log(fruits);

// shift().............
fruits.shift();
console.log(fruits); // remove first item