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

// function getHumanChoice() {
//     let humanPick = '';
//     do {
//         humanPick = prompt("Write 'r', 'p' or 's' to pick rock, paper or scissors.");
//         log(humanPick);
//     } while (humanPick !== 'r' && humanPick !== 'p' && humanPick !== 's')

        
//     if (humanPick === 'r') {
//         return "rock";
//     } else if (humanPick === 'p') {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

function playRound(humanPick) {

    // computerHand means that computer picked rock, paper or scissors;
    var computerHand = getComputerChoice();
    // check what did it pick
    log(computerHand);
    
    var humanHand = humanPick;
    // check what did it pick
    log(humanHand);
    
        // If there is a tie
        if (computerHand === humanHand) {
            announcements.textContent = "You both picked " + humanHand + ", this is a tie! Try again!";
            return; // End this round
        }
    
        if (humanHand === 'rock' && computerHand === 'paper') {
            announcements.textContent = "You lose! Paper beats rock.";
            computerScore++;
        } else if (humanHand === 'rock' && computerHand === 'scissors') {
            announcements.textContent = "You win! Rock beats scissors.";
            humanScore++;
        } else if (humanHand === 'paper' && computerHand === 'rock') {
            announcements.textContent = "You win! Paper beats rock.";
            humanScore++;
        } else if (humanHand === 'paper' && computerHand === 'scissors') {
            announcements.textContent = "You lose! Scissors beat paper.";
            computerScore++;
        } else if (humanHand === 'scissors' && computerHand === 'rock') {
            announcements.textContent = "You lose! Rock beats scissors.";
            computerScore++;
        } else if (humanHand === 'scissors' && computerHand === 'paper') {
            announcements.textContent = "You win! Scissors beat paper.";
            humanScore++;
        }
        

        // Update results
        result.innerHTML = 
        `Human = ${humanScore} <br>
        Computer = ${computerScore}`;

        // Check game state
        messageForTheWinner();

}

// Initialize the game state
function messageForTheWinner() {
    if (humanScore === 5) {
        announcements.textContent = "You wooon!";
        result.textContent = " ";
    } else if (computerScore === 5) {
        announcements.textContent = "Computa won!";
        result.textContent = " ";
    }
}


const buttons = document.querySelectorAll("button");
const announcements = document.querySelector("#announcements");
const result = document.querySelector("#result");

var humanScore = 0;
var computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    })
    
})






