function computerPlay() {
    computer = Math.floor(Math.random()*4) + 1;
    if (computer === 1) {
        computer = "Rock";
    }
    else if (computer === 2) {
        computer = "Paper";
    }
    else {
        computer = "Scissors";
    }
    return computer
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1)
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock"){
            return "It's a tie!"
        }
        else if (computerSelection === "Paper"){
            return "You lose! Paper beats Rock"
        } 
        else {
            return "You won! Rock beats Scissors"
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock"){
            return "You won! Paper beats Rock"
        }
        else if (computerSelection === "Paper"){
            return "It's a tie!"
        } 
        else {
            return "You lose! Scissors beats paper"
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock"){
            return "You lose! Rock beats Scissors"
        }
        else if (computerSelection === "Paper"){
            return "You won! Scissors beats paper"
        } 
        else {
            return "It's a tie"
        }
    }
}

const playerSelection = "rock"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))