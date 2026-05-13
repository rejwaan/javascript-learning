console.log("Loop and Iterations****");

// for loop 
// A for loop is best when we know exactly how many times we need to run a block of code.

for (let count=1; count <= 5; count++) {
    console.log("Iteration/loop", count);
}

// Addition of even numbers between 1 to 100 number

let sum = 0;
for (let i = 1; i<=100; i++){
    if (i % 2 === 0){
        sum += i;
    }
}

console.log("Sum is: ", sum);


// string

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i));
}



// Nested Loop

for (let i = 1; i<=3; i++){
    for (let j = 1; j<=3; j++){
        console.log("Row", i, "Collum", j);
    }
}


// Break and Continue

for (let i = 1; i <= 5; i++) {
    if (i === 3){
        break;
    }
    console.log(i);
}

// also we can right this (its valid)
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}


// continue

for (let i = 0; i < 7; i++) {
    if (i === 3) continue;
    console.log(i);
}

// Multiple counters for single loop

for (let i=1, j=10; i<=10 && j>=1; i++, j--) {
    console.log(i, j);
}

/* 
*
* *
* * *
* * * *
*/

// for (let i = 1; i<=3; i++){
//     for (let j = 1; j<=3; j++){
//         console.log("Row", i, "Collum", j);
//     }
// }

for (let row = 1; row <= 4; row++) {
    let pattern = "";

    for (let star = 1; star <= row; star++) {
        pattern += "* ";
    }

    console.log(pattern);
}

/* 

     *
    * *
   * * * 
  *  *  *
 *  *  *  * 
 
*/


// while loop 
// A while loop runs as long as given condition is true. Its best when we dont know in advance how many iterations are needed.

let counterr = 1;
while(counterr <= 5) {
    console.log(counterr);
    counterr++;
}



// do-while
// A do-while loop ensures that the code executes at least once before checking the condition.

let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);


// infinite loop

