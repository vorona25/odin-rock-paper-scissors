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

    let result = "";
    let output = "";

    // three possible results based on player's choice of Rock
    // print out message in console and store output to calculate winner at end
    if (playerSelection == "rock") {

        if (computerSelection == "Rock") {
            console.log("You Draw! Rock draws with Rock");
            result = "You Draw! Rock draws with Rock";
            output = "0";
        }
        else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
            result = "You Lose! Paper beats Rock";
            output = "-1";
        }
        else if (computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors");
            result = "You Win! Rock beats Scissors";
            output = "1";
        }
    }

    // three possible results based on player's choice of Paper
    // print out message in console and store output to calculate winner at end
    else if (playerSelection == "paper") {

        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
            result = "You Win! Paper beats Rock";
            output = "1";
        }
        else if (computerSelection == "Paper") {
            console.log("You Draw! Paper draws with Rock");
            result = "You Draw! Paper draws with Rock";
            output = "0";
        }
        else if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            result = "You Lose! Scissors beats Paper";
            output = "-1";
        }
    }

    // three possible results based on player's choice of Scissors
    // print out message in console and store output to calculate winner at end
    else if (playerSelection == "scissors") {

        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
            result = "You Lose! Rock beats Scissors";
            output = "-1";
        }
        else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
            result = "You Win! Scissors beats Paper";
            output = "1";
        }
        else if (computerSelection == "Scissors") {
            console.log("You Draw! Scissors draws with Scissors");
            result = "You Draw! Scissors draws with Scissors";
            output = "0";
        }
    }

    // Return 0, 1, or -1 based on if it was a draw, win, or loss for player
    return [result, output];
}


function game() {

    let playerPoints = 0;
    let computerPoints = 0;

    // Create DOM element to be interactive as user presses button
    const container = document.querySelector(".container");

    const playerScore = document.createElement("p");
    playerScore.textContent = "Player Score: " + playerPoints;
    container.appendChild(playerScore);

    const computerScore = document.createElement("p");
    computerScore.textContent = "Computer Score: " + computerPoints;
    container.appendChild(computerScore);

    const gameOutcome = document.createElement("p");
    gameOutcome.textContent = "";
    container.appendChild(gameOutcome);

    const winner = document.createElement("p");
    winner.textContent = "";
    container.appendChild(winner);

    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";
    container.appendChild(playAgain);
    playAgain.addEventListener("click", () => {
        location.reload();
    })


    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerChoice = button.getAttribute("class").toLowerCase();
            console.log("Player choice " + playerChoice);
    
            computerChoice = getComputerChoice();
            console.log("Computer choice " + computerChoice);
            
            const results = playRound(playerChoice, computerChoice);
            let result = results[0];
            let output = Number(results[1]);

            gameOutcome.textContent = result;
    
            if (output == 0) {
            }
            else if (output == 1) {
                playerPoints += 1;
                playerScore.textContent = "Player Score: " + playerPoints;
            }
            else if (output == -1) {
                computerPoints += 1;
                computerScore.textContent = "Computer Score: " + computerPoints;
            }
            
            endGame(playerPoints, computerPoints);
        })
    })


    function endGame(playerPoints, computerPoints) {
    
        if (playerPoints == 5) {
            winner.textContent = "Player has won the game!";

            document.getElementById("r").disabled = true;
            document.getElementById("p").disabled = true;
            document.getElementById("s").disabled = true;
        }

        if (computerPoints == 5) {
            winner.textContent = "Computer has won the game!";

            document.getElementById("r").disabled = true;
            document.getElementById("p").disabled = true;
            document.getElementById("s").disabled = true;
        }
    }
}


game();