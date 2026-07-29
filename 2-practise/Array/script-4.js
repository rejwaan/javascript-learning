// Array transform methods
// this methods return a new array

// map()

let numbers = [1, 2, 3, 4, 5, 6];

let doubled = numbers.map(num => num * 2);
console.log(doubled);


// filter()

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// reduce()

const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);


// forEach()

numbers.forEach(numbers => {
    console.log(numbers);
});


// Array.isArray()

console.log(Array.isArray(numbers)); // true