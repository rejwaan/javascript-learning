let str = "Hello World JavaScript";

let uppercases = 0;

for (let i = 0; i < str.length; i++) {
    if (((str[i].charCodeAt() >= 65) && (str[i].charCodeAt() <= 90))) {
        uppercases++;
    }
}

console.log(uppercases);