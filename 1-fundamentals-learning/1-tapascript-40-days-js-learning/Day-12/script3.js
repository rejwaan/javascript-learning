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
        'street': '65/2, brooklyn road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
}

// we will not use it..
// const name = student.name;
// const age = student.age;

// instead we use this... (also adding new value)
const { name, age, meal = "bread" } = student;
console.log(name, age, meal);

const { subjects, numberOfSubjects = subjects.length } = student;

console.log(numberOfSubjects); // 3


// Aliases.....

const { std: standard } = student;
console.log(standard); // 3
// console.log(std); // error



// nested object destructuring.....
const { address: { zip } } = student;

console.log(zip); // 5791



// destructuring ot Function parameter....

function sendEmail({ parents: { email } }) {
    console.log(`sent an email to ${email}`);
}

sendEmail(student);

// ----------------------------------------------


// destructure a function return value.....

const getStudent = () => {
    return {
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
            'street': '65/2, brooklyn road',
            'city': 'Carterton',
            'country': 'New Zealand',
            'zip': 5791
        }
    }
}


// const anotherStudent = getStudent();
// const anotherNamee  = anotherStudent.name;
// const anotherSubs  = anotherStudent.subjects;

// in just one line
const { name: anotherNamee, subjects: anotherSubs } = getStudent();

console.log(anotherNamee, anotherSubs);


// destructuring in Loops---

const students = [
    {
        'name':'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
];


for ( let {name, grade} of students) {
    console.log(name, grade);
}



// optional chaining...

const employee = {
    salary: {
        bonus: 300
    }
};

console.log(employee.salary);
console.log(employee.departmennt); // undefined
//console.log(employee.departmennt.name); //error

// const name = employee.departmennt && employee.departmennt.name;

const namee = employee.departmennt?.name
console.log(namee); // undefined