// Object Iteration --

// for...in -------------- loop

let person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

// loop through all keys
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}


// access both key and value
for (let key in person) {
    console.log(key, ":", person[key]);
}


/////////////////////////////////////////////
// Object.keys() + forEach()

let person2 = {
  name: "Rahim",
  age: 25,
  city: "DhakA"
};

// get keys array .........................
let keys = Object.keys(person2);
console.log(keys);

// access both key and value
Object.keys(person2).forEach(key => {
    console.log(key, person2[key])
});


//// ----------------------/////---------------------
// Object.keys() + map()  - learn it later