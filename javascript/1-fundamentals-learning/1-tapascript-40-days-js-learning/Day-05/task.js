// task by tapascript....
console.log("task");


/* 01 generate a pyramid pattern using nested loop as it is shown below:
*
* * 
* * *
* * * *
* * * * *

*/

for (let row = 1; row <= 5; row++) {
    let pattern = "";

    for (let star = 1; star <= row; star++) {
        pattern += "* ";
    }
    console.log(pattern);
}




/* 2. Craete Multiplication Table (Using for loop)
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
*/

let N = 3;
let result, total;

for (let i = 1; i <= 10; i++) {
    result = N * i;
    total = `${N} x ${i} = ${result}`;
    console.log(total);
}


/* 3. find the summation of all odd numbers between 1 to 500 and print them on the console log.
*/

let summation = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 != 0) {
        summation += i;
    }
} console.log(summation);


/* 4. write a program to print numbers from 1 to 20, but skip multiples of 3.
*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

/* 
5. Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876
*/


let number = 6789;
let reverse = 0;

while (number > 0) {
    let lastDigit = number % 10;  
    reverse = reverse * 10 + lastDigit; 
    number = Math.floor(number/10);
}

console.log(reverse);