// Object Spread & Destructuring 

// spread (...)

// 1 - copy wiht (...)
let person = { name: "Reze", age: 25 };
let copy = {...person};
console.log(copy);

// 2 - merge with(...)
let user1 = {name: "rejo"};
let user1Details = {age: 21};
let merged = {...user1, ...user1Details};
console.log(merged);

// 3 - update with (...)

let userX = {age: 20};
let update = {...userX, age: 30};
console.log(update); // 30
console.log(userX); // original not change

// override
let nums1 = {a:2, b:4};
let nums2 = {a:5, b:10};
let newnums1 = {...nums1, ...nums2};
let newnums2 = {...nums2, ...nums1};
console.log(newnums1); // { a: 5, b: 10 }
console.log(newnums2); // { a: 2, b: 4 }



///  Object Destructuring ----

// basic destructuring
let newPerson1 = {named: "reze", age: 20, city: "dhaka"};

let {named, age, city} = newPerson1;
console.log(named, age, city);

// Rename Variables (Alias)----
let person2 = { name: "Raju", age: 25 };
let {name: userName, age: userAge} = person2;

console.log(userName);
console.log(userAge);


// Default Values----------------
let person3 = {names: "raju", ages: 20};

let {names, ages = 25, citys = "dhaka"} = person3
console.log(names, ages, citys);// raju 20 dhaka


// Rest Pattern with Object Destructuring-----

let fruits = {
    fruit1: "mango", 
    fruit2: "orange", 
    fruit3: "banana",
    fruit4: "cherry"
}

let {fruit1, fruit3, ...othersFruits} = fruits;
console.log(fruit1, fruit3);
console.log(othersFruits);





//////////////////////////////////////////////
// Nested Destructuring
// basic ----

let aUser = {
    newNames: "rejo",
    newAge: 20,
    newAddress: {
        newCity: "Dhaka",
        newCountry: "BD"
    },
    isHome: true,
}

let {newNames, newAddress: {newCity, newCountry}} = aUser;

console.log(newNames, newCity, newCountry);


// Nested Destructuring with Rename and default value

let bUser = {
    newNames2: "rejo",
    newAge2: 20,
    newAddress2: {
        newCity2: "Dhaka",
        newCountry2: "Bd"
    },
    isHome2: true,
}

let {
    newAge2: Agess,
    isStudent = true,
    newAddress2: {
        newCountry2: Country,
        
    }
} = bUser;

console.log(Agess);
console.log(isStudent);
console.log(Country);