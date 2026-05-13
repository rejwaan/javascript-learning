console.log("Day 04");

let catchbus = true;
if (catchbus) {
    console.log("Oh Yes, I can go Home");
} else {
    console.log("Oh No, I can't go Home");
}


let age = 17;

if (age >= 18)
    console.log("You are Eligible to vote");
else
    console.log("You are Not eligible to vote");
// without {} its valid but for one line code and its not recomended!

// let's build a grading system

let score = 76;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else if (score >= 60) {
    console.log("Grade D");
}
else {
    console.log("You Are Fail. ha ha ha!");
}


// nested if else;

const condition = true;
const innerCondition = false;

if(condition) {
    console.log("Outer If");
    if (innerCondition) {
        console.log("Inner If");
    } else {
        console.log("Inner Else");
    }
} else {
    console.log("Outer Else");
}

// 2 

let isLoggedIn = true;
let ages =  15;

if (isLoggedIn) {
    console.log("You are Logged In")
    if (ages >=18) {
        console.log("Access Granted");
    } else {
        console.log("Age too low");
    }
} else {
    console.log("Please Login First")
}


// switch case;

let position = 3;

switch (position) {
    case 1: 
        console.log("print 1");
        break;
    case 2:
        console.log("print 2");
        break;
    case 3:
        console.log("print 3");
        break;
    default:
        console.log("No match");
}

// 2

let dayNumber = 7;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}