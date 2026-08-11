// Problem 8
// Write a function that takes an object with properties 'firstName' and 'lastName'.
// Using object destructuring with renaming, extract the properties as 'first' and 'last'.
// Return a string: "Full name: [first] [last]"
//
// Input: { firstName: "Rahim", lastName: "Miah" }
// Expected output: "Full name: Rahim Miah"
//
// Input: { firstName: "Sadia", lastName: "Akter" }
// Expected output: "Full name: Sadia Akter"



function inputs({firstName: first, lastName: last}) {
    return `Full name: ${first} ${last}`;
}
console.log(inputs({firstName: "Sadia", lastName: "Akter"}));