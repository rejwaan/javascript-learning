// Problem 1
// Write a function that counts how many properties an object has.
//
// Input object:
// const student = {
//     name: "Karim",
//     age: 22,
//     subject: "Computer Science",
//     semester: 5,
//     city: "Chittagong"
// };
//
// Expected output:
// 5


const student = {
    name: "Karim",
    age: 22,
    subject: "Computer Science",
    semester: 5,
    city: "Chittagong"
};
let count = 0;
for (let key in student) {
    count+= 1;
}

console.log(count);