// optional chaining

let user = {
    name: "reze",
    address: {
        city: "dhaka"
    }
};

// old method
// console.log(user.address.city);
// console.log(user.profile.code); // error

// optional chaining (?.)
console.log(user?.profile?.code); // undefined
console.log(user?.address?.city); // dhaka

console.log(user?.details?.age); // undefined



// with function

const user1 = {
    greet() {
        console.log("Hello");
    }
};

user1.greet?.();
user1.say?.(); // no error


// with array

const user2 = [
    {name: "rejo"}
];

console.log(user2[0]?.name); // rejo
console.log(user2[1]?.age); // undefined


// multiple chaining

let user3 = {
    name: "reze",
    address: {
        city: "dhaka",
        zip: {
            code: 342
        }
    }
};

console.log(user3?.address?.zip?.code); // 342
console.log(user3?.address?.details?.age); //und


// chaining + nullish coalescing (??)

let user4  = {
    name: "John"
};

console.log(user4?.address?.age ?? "Unknown"); // Unknown


