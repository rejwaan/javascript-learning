// Loops In JavaScript

// for loop...............
// example..
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop ...............
// example..
let x = 1;
while (x <= 5) {
    console.log(x , "hi");
    x++;
}


// do while loop ..............
// example..
let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 10);


// break and continue ..............
// example.. (break)
for (let i = 1; i <= 10; i++) {
    if (i === 5) {  // break in 4
        break;
    }
    console.log(i);
}

// example..  (continue)
for (let i = 1; i <= 10; i++) {
    if (i === 5) {  // skip 5
        continue;
    }
    console.log(i);
}



// Nested loops .............
console.log("nested loop");

for (let i = 1; i <= 3; i++) {
    console.log("outer loop",i);

    for (let j = 1; j <= 3; j++) {
        console.log("inner loop",j);
    }
}