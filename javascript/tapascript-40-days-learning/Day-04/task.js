console.log("*******Task***********");

// 1
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}


// 2

let amount = 9200;
if (amount%100 == 0) {
    console.log("Withdrawal successful");
}
else {
    console.log("Invalid amount");
}


// 3 build a calculator with switch-case

let operator = "";
let a = 20;
let b = 10;
let result;

switch (operator) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    case "%":
        result = a % b;
        break;
    default:
        result = "invalid operator";
}
console.log(result);



// 4 pay for your movie ticket

let Age = 34;

if (Age < 18 && Age >= 0) {
    console.log("Your ticket charge is: $3");
}

else if (18 <= Age && Age <= 60) {
    console.log("Your ticket charge is: $10");
}

else if (Age > 60 && Age < 120) {
    console.log("Your ticket charge is: $8");
}

else {
    console.log("Invalid Age!");
}


// 5 sign checker

let birthMonth = 10;
let type;
switch(birthMonth) {
    case 1:
    case 2:
        type = "Slow Leveling";
        break;
    case 3:
    case 4:
        type = "Attack On Titan";
        break;
    case 5:
    case 6:
        type = "Demon Slayer";
        break;
    case 7:
    case 8:
        type = "One Punch Man";
        break;
    case 9:
    case 10:
        type = "Sakamoto Days";
        break;
    case 11:
    case 12:
        type = "Tokyo Revengers";
        break;
    default:
        type = "Invalid BirthMonth";
}
console.log(type);


// 6 which triangle?

let p, q, r;
p = 0;
q = 8;
r = 9;

if ( p === q && p === r) {
    console.log("Equilateral Triangle");
}
else if ((p === q && p != r) || (p === r && p != q) || (q === r && q != p)) {
    console.log("Isosceles Triangle");
}

else {
    console.log("Scalene Triangle");
}