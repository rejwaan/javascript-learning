// Write a function that capitalizes the first letter of each name in an array.
//
// Input array:
// const names = ["rahim", "karim", "sadia", "tamim"];
//
// Expected output:
// ["Rahim", "Karim", "Sadia", "Tamim"]


const names = ["rahim", "karim", "sadia", "tamim"];

const capitalized = names.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(capitalized);