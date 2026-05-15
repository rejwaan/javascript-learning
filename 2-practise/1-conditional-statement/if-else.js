// problem solve with chatgpt
// conditional statement.

// 01 - positive , negative or zero number checker

function checkNumber(a) {

    if (a > 0) {
        return "Positive";
    }

    else if (a < 0) {
        return "Negative";
    }

    else {
        return "Zero";
    }

}

let result = checkNumber(7);
console.log(result);


// 2 - evem or odd check

function evenOrOdd(a) {
    if(a%2===0) {
        return "Even";
    }

    else {
        return "Odd";
    }
}

const numberType = evenOrOdd(3);
console.log(numberType);



// 3 - Age checker

function ageChecker(a) {
    if (a >= 18) {
        return "Adult";
    }

    else {
        return "Minor";
    }
}

const results = ageChecker(28);
console.log(results);


