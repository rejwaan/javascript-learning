/* 
* The rock paper scissors  game
* rock can break scissor
* paper can break rock
* scissor can break paper

what to do: 
1. we have a prompt the user to get their inputs
2. the computers selection will be random.
3. we have to compare user and computers choice
4. we need to announce the winner
5. after the  winner announcement, we may want to ask the user play again or quit from the game 

*/

function rps() {
    console.log("get start:");

    // prompt the user

    const input = prompt("Enter Rock, Paper or Scissors:");

    // change input to lowercase
    const userInput = input.toLowerCase();
    // console.log(userInput);

    // computer choice
    let cpChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;


    // logic  1 
    if (randomNumber === 1) {
        cpChoice = "rock";
    }
    else if (randomNumber === 2) {
        cpChoice = "paper";
    }
    else {
        cpChoice = "scissors"
    }

    // output of user and computer selection
    console.log("User selected: ", userInput);
    console.log("Computer selected: ", cpChoice);


    // main logic

    if ((userInput === "rock" && cpChoice ==="scissors") || (userInput === "paper" && cpChoice === "rock") || (userInput === "scissors" && cpChoice === "paper")) {
        console.log("User Win !!!!!");
    }

    else if (userInput === cpChoice) {
        console.log("The Match is Tie '-'");
    }

    else if ((userInput === "paper" && cpChoice ==="scissors") || (userInput === "scissors" && cpChoice === "rock") || (userInput === "rock" && cpChoice === "paper")) {
        console.log("OH NO, Computer Win~")
    }

    else {
        console.log("Check the user input and try again!");
    }


    // play again?

    const playAgain = prompt("Do You want to play Again? (yes/no): ");

    const PA = playAgain ? playAgain.toLowerCase() : "no";


    if (PA === "yes") {
        rps();
    }

    else {
        console.log("Thanks for playing!");
    }

}

// start
rps();