// REST paramets (...)

// basic example 
function numbers(...nums) {
    return nums;
}
console.log(numbers(3,4,5,7));


// normal para and rest para...

function student(name, ...subjects) {
    console.log(name);
    console.log(subjects);
}

student("reze", "bangla", "math", "physics");


// rest + arrow function

const add = (...nums2) => {
    return nums2.reduce((acc, num) => acc + num, 0);
}

console.log(add(4,5,6,7));

// rest parameter position must be at last
// rest parameter should not be more than one
