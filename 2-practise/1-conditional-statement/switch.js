// switch

// 01 - Day Name

function getDayName(a) {
    
    switch(a) {
        case 1:
            return "Saturday";
        case 2:
            return "Sunday";
        case 3:
            return "Monday";
        case 4:
            return "Tuesday";
        case 5:
            return "Wednesday";
        case 6:
            return "Thursday";
        case 7:
            return "Friday";
        default:
            return "Invalid day";
    }
}

let checkDay = getDayName(5);
console.log(checkDay);



// 02 - Traffic Light System

function trafficLightAction(input) {
    switch(input) {
        case "red":
            return "Stop";
        case "yellow":
            return "Slow Down";
        case "green":
            return "Go";
        default:
            return "Invalid signal";
    }
}

const output = trafficLightAction("green");
console.log(output);


// 3 - simple calculator

function calculator(a,b,operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}
const calculate = calculator(3,4,"/");
console.log("result is:",calculate);
