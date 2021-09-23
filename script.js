let playerScore = 0
let computerScore = 0
const playerScore_span = document.getElementById("userScore")
const computerScore_span = document.getElementById("computerScore")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("1")
const paper_div = document.getElementById("2")
const scissors_div = document.getElementById("3")


function computerPlay() {
    computer = Math.floor(Math.random()*3) + 1;
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

function change(player) {
    if (player == "Rock") return "1";
    if (player == "Paper") return "2";
    if (player == "Scissors") return "3";
}

function exit() {
    if (playerScore == 5) {
        document.querySelector(".final").classList.add("win")
        document.querySelector(".final").innerHTML = "CONGRATULATIONS YOU WIN!"
        setTimeout(function() {window.location.reload();}, 2000 )
    }
    if (computerScore == 5) {
        document.querySelector(".final").classList.add("lose")
        document.querySelector(".final").innerHTML = "I'M SORRY, COMPUTER WINS!"
        setTimeout(function() {window.location.reload();}, 2000 )
    }
}

function draw(player,computer) {
    result_div.innerHTML = "It was a draw!"
    document.getElementById(change(player)).classList.add("yellow-border")
    setTimeout(function() {document.getElementById(change(player)).classList.remove("yellow-border")}, 400 )
    exit()
}

function win(player,computer) {
    playerScore ++
    playerScore_span.innerHTML = playerScore
    result_div.innerHTML = player + " beats " + computer + ". You won 1 point!"
    document.getElementById(change(player)).classList.add("green-border")
    setTimeout(function() {document.getElementById(change(player)).classList.remove("green-border")}, 400 )
    exit()
}

function lose(player,computer) {
    computerScore++
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = player + " loses to " + computer + ". Computer won 1 point"
    document.getElementById(change(player)).classList.add("red-border")
    setTimeout(function() {document.getElementById(change(player)).classList.remove("red-border")}, 400 )
    exit()
}


function playRound(playerSelection) {
    const computerSelection = computerPlay()
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock"){
            draw(playerSelection,computerSelection)
        }
        else if (computerSelection === "Paper"){
            lose(playerSelection,computerSelection)
        } 
        else {
            win(playerSelection,computerSelection)
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock"){
            win(playerSelection,computerSelection)
        }
        else if (computerSelection === "Paper"){
            draw(playerSelection,computerSelection)
        } 
        else {
            lose(playerSelection,computerSelection)
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock"){
            lose(playerSelection,computerSelection)
        }
        else if (computerSelection === "Paper"){
            win(playerSelection,computerSelection)
        } 
        else {
            draw(playerSelection,computerSelection)
        }
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        playRound("Rock")
    })
    
    paper_div.addEventListener('click', function() {
        playRound("Paper")
    })
    
    scissors_div.addEventListener('click', function() {
        playRound("Scissors")
    })
}

main()
