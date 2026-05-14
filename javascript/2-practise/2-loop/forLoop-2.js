// medium complicated problem solving with chatgpt

// 01
// print prime number from 1 to 100:

for (let i = 2; i <= 100; i ++) {
    let isPrime = true;

    for(let j = 2; j < i; j++) {
        if ( i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}