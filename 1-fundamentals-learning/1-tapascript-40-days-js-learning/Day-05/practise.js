// practise with chatgpt
console.log("Practise with chatgpt");


// problem 1
// print Numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// problem 2
// print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// or 

for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}


// problem 3
// reverse print

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//problem 4
// sum of 1 to 10 numbers

let Sum = 0;
for (let i = 1; i <= 10; i++) {
    Sum += i;
} 
console.log(Sum);


// problem 5
// sum of odd numbers from 1 to 10

let aum = 0;
for (let i = 1; i <= 10; i += 2) {
    aum += i;
}

console.log(aum);


// problem 6
// count even number from 1 to 20

let count = 0;
for (let i = 2; i <= 20; i+=2) {
    count++;
}
console.log(count);


// problem 7
// divisible by 5 from 1 to 50.

let counts = 0;

for (let i = 1; i <= 50; i++) {
    if ( i % 5 === 0) {
        counts++;
    }
} 
console.log(counts);


// problem 8
// print multiplication of a number

let theFixNum = 5;
for (let i = 1; i <= 10; i++) {
    let total = theFixNum * i;
    console.log(`${theFixNum} x ${i} = ${total}`);
}
