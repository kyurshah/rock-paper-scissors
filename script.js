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


function playGame() {

    for (let i = 0 ; i < 5 ; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice)
        console.log(`You chose ${humanChoice} while Computer chose ${computerChoice}`)
        console.log(`${result}`)
        console.log(`Your score is ${humanScore} and Computer score is ${computerScore}`)
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

}

playGame();