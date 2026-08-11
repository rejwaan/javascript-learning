// Function parameters destructuiring

// Object parameter destru....

function greet({name, age}) {
    return `${name}, ${age}`;
}

let user = {name: "reze", age: 43};
console.log(greet(user));


// Array..

function getFirst([first, second]) {
    return `${first}, ${second}`;
}

let colors = ["red", "green"];
console.log(getFirst(colors));