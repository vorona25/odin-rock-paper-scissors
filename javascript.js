// Function that randomly chooses between Rock, Paper, Scissors for computer choice
function getComputerChoice() {

    let rpsArray = ["Rock", "Paper", "Scissors"];

    // Get random number between 0-2
    index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    // Use random integer to index into array and select one of three options
    computerChoice = rpsArray[index];

    // Return random choice between Rock, Paper, Scissors
    return computerChoice;
}


// Function that uses prompt() to ask user to input Rock, Paper, or Scissors
function getPlayerChoice() {

    // Use .toLowerCase() to make result case insensitive
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    // return player's choice of the three
    return playerChoice;
}


// function playRound takes 2 parameters and returns string declaring winner
function playRound(playerSelection, computerSelection) {

    // three possible results based on player's choice of Rock
    // print out message in console and store output to calculate winner at end
    if (playerSelection == "rock") {

        if (computerSelection == "Rock") {
            console.log("You Draw! Rock draws with Rock");
            output = 0;
        }
        else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
            output = -1;
        }
        else if (computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors");
            output = 1;
        }
    }

    // three possible results based on player's choice of Paper
    // print out message in console and store output to calculate winner at end
    else if (playerSelection == "paper") {

        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
            output = 1;
        }
        else if (computerSelection == "Paper") {
            console.log("You Draw! Paper draws with Rock");
            output = 0;
        }
        else if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            output = -1;
        }
    }

    // three possible results based on player's choice of Scissors
    // print out message in console and store output to calculate winner at end
    else if (playerSelection == "scissors") {

        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
            output = -1;
        }
        else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
            output = 1;
        }
        else if (computerSelection == "Scissors") {
            console.log("You Draw! Scissors draws with Scissors");
            output = 0;
        }
    }

    // Return 0, 1, or -1 based on if it was a draw, win, or loss for player
    return output;
}


// function game that does a 5 round game and keeps score, reporting winner or loser at end
function game() {

    // Set player and computer points at 0 to start, will add 1 based on who wins each game
    let playerPoints = 0;
    let computerPoints = 0;
    // random variable since cannot use pass to break loop
    let count = 0;

    // Use for loop to play game 5 times 
    for (let i = 0; i < 5; i++) {
        // call getPlayerChoice() defined above to get player's choice of the three
        playerChoice = getPlayerChoice();
        // call getComputerChoice() defined above to get comp's random choiec of three
        computerChoice = getComputerChoice();
        // Get output value based on who won the round
        output = playRound(playerChoice, computerChoice);

        // Decide who to add a point value to based on value of output
        if (output == 0) {
            count += 1;
        }
        else if (output == 1) {
            playerPoints += 1;
        }
        else if (output == -1) {
            computerPoints += 1;
        }
    }
    
    // At end of 5 rounds, look at total value of player and computer poitns to decide winner
    if (playerPoints > computerPoints) {
        result = "Winner is the player";
    }
    else if (playerPoints < computerPoints) {
        result = "Winner is the computer";
    }
    else {
        result = "Result is a draw";
    }

    // return a string declaring winner after 5 rounds of RPS
    return result;
}

// Print out result of winner after calling game() which returns a string declaring winner
console.log(game())
