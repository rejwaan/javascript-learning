// 11 - Shallow copy vs deep copy...........

const user1 = {
    name: "Rejo",
    address: {
        city: "Dhaka"
    }
};

const user2 = Object.assign({}, user1);

user2.address.city = "Khulna";

console.log(user1.address.city);
console.log(user2.address.city);