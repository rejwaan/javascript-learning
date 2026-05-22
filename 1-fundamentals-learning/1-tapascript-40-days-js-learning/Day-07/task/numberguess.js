/*
number guessing game 

You will ask user for number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to reach to this right guess.
// then prompt the use as Play again(yes/no)?
*/


function numberGuess() {
    console.log("Welcome to the Number Guessing game !");


    const randomNum = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    while (true) {
        const userInput = prompt("Guess A Number from 1 to 100:");
        const userNumber = parseInt(userInput);

        attempts++;

        if(userNumber === randomNum) {
            console.log(`Correct! the number is ${randomNum}. Attempts: ${attempts}`);
            break;
        }

        else if (userNumber < randomNum) {
            console.log("Should be High! try Again.");
        }

        else {
            console.log("Should be Low! try Again.");
        }
    }

    const playAgainPrompt = prompt("play again? yes/no");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain === "yes") {
        numberGuess();
    }

    else {
        console.log("thanks for playing!");
    }

}

numberGuess(); 