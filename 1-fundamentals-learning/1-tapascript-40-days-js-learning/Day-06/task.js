console.log("task***");


// task 1 - write a functin to convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(35));


// task 2 - create a function to find the maximum of two numbers

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

console.log(findMax(78,80));


// task 6 - write a function to capitalize the first letter of each word in a sentence

function capitalizeWords(sentence) {
    let words = sentence.split(" ");

    let result = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return result.join(" ");
}
console.log(capitalizeWords("hi i am rejo. i am new at school."))