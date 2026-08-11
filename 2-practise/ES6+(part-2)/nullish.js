// nullish coalescing operator (??)

// basic example

const username = null;
const userage = undefined;
const name = username ?? "Guest";
const age = userage ?? "18-";

console.log(name); // Guest
console.log(age);  // 18-


// if value availabe
const usercity = "Dhaka";
console.log(usercity ?? "cumilla"); // Dhaka


// its check only null or undefined
// not check (0, "", false)

console.log(0 ?? "nullish") // 0
console.log("" ?? "nullish") // 
console.log(false ?? "nullish") // false


// ?. + ?? 

const user = {}; 

const city = user.address?.city ?? "Unknown";
console.log(city); // Unknown