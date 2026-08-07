// uses of arrow

// arrow + callback

function greet(callback) {
    callback();
}

greet(() => {
    console.log("Hello");
});


// forEach()

const number = [1, 2, 3];

number.forEach(num => {
    console.log(num);
});

// more short
const number2 = [2, 4, 6];
number2.forEach(num => console.log(num));



// map()

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num*2);
console.log(doubledNumbers);


// filter()

const numbers2 = [10, 20, 30];
const result = numbers2.filter(num => num > 15);
console.log(result);

// reduce()
const total = numbers2.reduce((acc, num) => acc + num, 0);
console.log(total);



// with object

const user = [
    {name: "rejo", age: 34}, 
    {name: "reze", age: 45}
];

const name = user.map(user => user.name);
console.log(name);


// test

const Numbers = [2, 4, 6, 8];

const squares = Numbers.map(num => num * num);

console.log(squares);