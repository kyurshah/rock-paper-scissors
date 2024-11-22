console.log("testing if this works")

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt("Choose between Rock, Paper and Scissors", "rock").toLowerCase();
    // return "paat".toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return "Computer Wins!";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return "You Win!";
    }
    else if (humanChoice == "rock" && computerChoice == "rock") {
        computerScore += 1;
        humanScore += 1;
        return "TIE!";
    }

    else if (humanChoice == "paper" && computerChoice == "paper") {
        computerScore += 1;
        humanScore += 1;
        return "TIE";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return "Computer Win!";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {

        humanScore += 1;
        return "You Win!";
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return "You Wins!";
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        humanScore += 1;
        computerScore += 1;
        return "TIE!";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return "Computer Wins!";
    }



}