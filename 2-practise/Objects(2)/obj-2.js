// add - update - delete - freeze() - seal()

let person = {
  name: "Rahim",
  age: 25
};

person.city = "Dhaka";  // add

person.age = 30;  // update or modify

delete person.name; // delete 

console.log(person); // check


// freeze() ------------------------

let user1 = {
  name: "Rahim",
  age: 25
};
Object.freeze(user1); // freeze obj

user1.age = 22; // dont work
delete user1.name; // dont work also

console.log(user1); // check and yes it didn't work


// seal() - only modify but don't have add or delete

user2 = {
    name: "John",
    age: 33
}
Object.seal(user2);

user2.age = 30; // it will work
user2.home = "dhaka"; // dont work
delete user2.name; // dont work

console.log(user2);