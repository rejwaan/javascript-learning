// Conditional Statement -

// if , else-if , else 



let salary = 7000;

if (salary <= 0) {
    console.log("You are dead");
}

else if (salary < 20000) {
    console.log("You are poor");
}

else {
    console.log("You are rich in bd");
}



// switch statement -

let day = 4;

switch(day) {
    case 1:
        console.log("sat");
        break;
    case 2:
        console.log("sun");
        break;
    default:
        console.log("I don't know");
}


// ternary operator - done before 

// nested conditions

let age = 20;
let boy = false;

if (age >= 18) {
    console.log("pass in age");
    if (boy == true) {
        console.log("pass in gender");
    }
    else {
        console.log("don't pass in gender");
    }   
}

// its good to avoid nested condition