console.log("Task *******");

// odd or even?
let num = 7;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Do you have a driving license?
let ages = 17;
if (ages >= 18) {
    console.log("You are eligibile to get a driving licence.");
} else {
    console.log("You are not eligible to get a driving licence.");
}


// calculate CTC with a bonus
let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;

let bonus = annualSalary * (20/100);

let total = annualSalary + bonus;
console.log(`annual total salary (wiht bonus): ${total}`);


// write a program for the traffic light simulation
let color = "Green";

if(color == "Red") {
    console.log("STOP!");
} 
else if (color == "Green") {
    console.log("GO!");
} 
else {
    console.log("Electricity missing.");
}


// 5 create an electricity bill calculator
let units = 2;
let perUnitCost = 150;

let perDayCost = units * perUnitCost;
let monthlyCost = perDayCost * 30;
console.log(`per month charged: ${monthlyCost}`);

let annualCost = monthlyCost * 12;
let Discount = annualCost * (20/100);
let annualDiscount = annualCost - Discount;
console.log(`Annual charged (with 20% discount): ${annualDiscount}`);


// 6 Leap Year Checker
let year = 2020;
console.log(year%4 == 0 ? "Leap Year" : "Not Leap Year");


// 7 max of three numbers
let m, n, o;
m = 11;
n = 8;
o = 7;

if (m>n && m>o) {
    console.log(`Max is: ${m}`);
}
else if (n>m && n>o) {
    console.log(`Max is: ${n}`);
}
else {
    console.log(`Max is: ${o}`);
}


// Bitwise Doubling
let Cont = 5;
let double = Cont << 1; 
console.log(double); // 10

// 5 << 1 = 10
// 5 << 2 = 20
// 5 << 3 = 40
// number × 2