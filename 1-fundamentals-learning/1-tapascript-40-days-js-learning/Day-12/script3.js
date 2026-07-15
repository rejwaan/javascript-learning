// Object Destructuring...............

const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'street':'65/2, brooklyn road',
        'city':'Carterton',
        'country':'New Zealand',
        'zip': 5791
    }
}

// we will not use it..
// const name = student.name;
// const age = student.age;

// instead we use this... (also adding new value)
const {name, age, meal="bread"}  = student;
console.log(name, age, meal);

const {subjects, numberOfSubjects = subjects.length} = student;

console.log(numberOfSubjects); // 3


// Aliases.....

const{std: standard} = student;
console.log(standard); // 3
// console.log(std); // error



// nested object destructuring.....
const {address: {zip}} = student;

console.log(zip); // 5791



// destructuring ot Function parameter....

function sendEmail({parents: {email}}) {
    console.log(`sent an email to ${email}`);
}

sendEmail(student);

// ----------------------------------------------

