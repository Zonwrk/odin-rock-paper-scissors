const log = console.log;
// Write s script to play against the computer, rock, paper, scissors.

function getComputerChoice() {
    // Get a random number from 0 to 9
    // This loop will run again if I randomly get 0
    let initialValue = 1;
    do {
        initialValue = Math.floor(Math.random() * 10);
    } while (initialValue === 0);

    // Check am I really getting only 1-9
    log(initialValue);

    // I divided a third of values from 1-9 and assigned them to one of 3 options.
    if (initialValue < 4) {
        return "rock";
    } else if (initialValue > 3 && initialValue < 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanPick = 'a';
    do {
        humanPick = prompt("Write 'r', 'p' or 's' to pick rock, paper or scissors.");
        log(humanPick);
    } while (humanPick !== 'r' && humanPick !== 'p' && humanPick !== 's')

        
    if (humanPick === 'r') {
        return "rock";
    } else if (humanPick === 'p') {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound() {
    do {
    // computerHand means that computer picked rock, paper or scissors;
    var computerHand = getComputerChoice();
    // check what did it pick
    log(computerHand);
    
    var humanHand = getHumanChoice();
    log(humanHand);
    
    
        if (humanHand === 'rock' && computerHand === 'paper') {
            log("You lose! Paper beats rock.");
            computerScore++;
        } else if (humanHand === 'rock' && computerHand === 'scissors') {
            log("You win! Rock beats scissors.");
            humanScore++;
        } else if (humanHand === 'paper' && computerHand === 'rock') {
            log("You win! Paper beats rock.");
            humanScore++;
        } else if (humanHand === 'paper' && computerHand === 'scissors') {
            log("You lose! Scissors beat paper.");
            computerScore++;
        } else if (humanHand === 'scissors' && computerHand === 'rock') {
            log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (humanHand === 'scissors' && computerHand === 'paper') {
            log("You win! Scissors beat paper.");
            humanScore++;
        }
        
        
        if (computerHand === humanHand) {
            log("You both picked " + humanHand + ", this is a tie! Try again!");
        }
    } while (computerHand === humanHand);
}

function playGame() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
        log("Human score: " + humanScore);
        log("Computer score: " + computerScore);
        if (humanScore === 3) {
            log("You won you crazy mothefucker!");
            break;
        } else if (computerScore === 3) {
            log("Damn God, you lost from a bucket of scrap metal.");
            break;
        }    
    }
    
}

var humanScore = 0;
var computerScore = 0;

playGame();


