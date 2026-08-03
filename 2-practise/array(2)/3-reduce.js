// reduce

// syntax ----------------
/*===============================================

const result = array.reduce((acc, current) => {
    return acc + current;
}, 0);

==================================================
*/
// example 1- simple

const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(sumOfNumbers);


// example - 2 

const products = [
    {name: "laptop", price: 70000},
    {name: "keyboard", price: 10000},
    {name: "mouse", price: 5000}
]

const totalPrice = products.reduce((total, product) => {
    return total + product.price
}, 0)

console.log(totalPrice);


