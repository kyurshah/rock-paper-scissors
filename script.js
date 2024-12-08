console.log("testing if this works")

const humanSelectionRock = document.querySelector("#rock");
const humanSelectionPaper = document.querySelector("#paper");
const humanSelectionScissors = document.querySelector("#scissors");
const resetGameButton = document.querySelector("#resetGame");

const humanChoiceDiv = document.querySelector("#humanChoice");
const computerChoiceDiv = document.querySelector("#computerChoice");
const resultDiv = document.querySelector("#result");
const gamesPlayedDiv = document.querySelector("#gamesPlayed");


let humanChoice = "";
let gamesPlayed = 0;
let humanScore = 0;
let computerScore = 0;

resetGameButton.addEventListener("click", function() {
    gamesPlayed = 0;
    gamesPlayedDiv.textContent = `games played - ${gamesPlayed}`
})


function getComputerChoice() {
    let randomVariable = Math.floor(Math.random() * 3 ) + 1;
    
    if (randomVariable == 1)   {
        return "rock";
    }
    else if  (randomVariable == 2) {
        return "paper";
    }
    else if  (randomVariable == 3) {
        return "scissors";
    }


}


humanSelectionRock.addEventListener("click", function() {
    humanChoice = "rock";
    playGame();
})

humanSelectionPaper.addEventListener("click", function() {
    humanChoice = "paper";
    playGame();
})

humanSelectionScissors.addEventListener("click", function() {
    humanChoice = "scissors";
    playGame();
})


function playGame() {
    
    if (gamesPlayed === 5) {
        console.log("GAMEOVER")
        humanSelectionRock.disabled = true;
        humanSelectionPaper.disabled = true;
        humanSelectionScissors.disabled = true;
    
    }
    else{
        gamesPlayed += 1;
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice)
        humanChoiceDiv.textContent = `You choose ${humanChoice}`;
        computerChoiceDiv.textContent = `Computer choose ${computerChoice}`;
        resultDiv.textContent = `${result}`;
        gamesPlayedDiv.textContent = `Games played - ${gamesPlayed}`
        }
    
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            computerScore += 1;
            humanScore += 1;
            return `Its a TIE - ${humanChoice} = ${computerChoice}`;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            return `Computer Wins - ${computerChoice} beats ${humanChoice}`;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            return `You Win - ${humanChoice} beats ${computerChoice}`;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            return `Computer Wins - ${computerChoice} beats ${humanChoice}`;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
    
            humanScore += 1;
            return `You Win - ${humanChoice} beats ${computerChoice}`;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            return `You Win - ${humanChoice} beats ${computerChoice}`;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            return `Computer Wins - ${computerChoice} beats ${humanChoice}`;
        } 
    
}
