// while loop simple problem solve
// problem given by chatgpt

// 1 - print 1 to 5

let num = 1;
while(num <= 5) {
    console.log(num);
    num++;
}


// 2 - reverse 5 to 1

let number = 5;
while(number >= 1) {
    console.log(number);
    number--;
}


// 3 - sum 

function sumUpTo(a) {
    let i = 1;
    let sum = 0;
    while(i <= a) {
        sum+=i;
        i++;
    }
    return sum;
}

const result = sumUpTo(10);
console.log(result);


// print even numbers (1-10)

function printEven(a) {
    let i = 1;
    while(i <= a) {
        if(i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
printEven(10);


// count down time
function countDown(n) {
    let i = n;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
countDown(10);