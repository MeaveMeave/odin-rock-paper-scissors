let cpuChoiceList = ["rock", "paper", "scissors"];
let totalGames = 0;
let totalWins = 0;
let totalLose = 0;

let playerLog = document.querySelector(".player-log");
let cpuLog = document.querySelector(".cpu-log");
let gameLog = document.querySelector(".game-log");
let score = document.querySelector(".score");

function getPlayerChoice(arg) {
    let cpuChoice = cpuChoiceList[Math.floor(Math.random() * 3)];
    console.log("chose " + arg + "\n Противник выбрал " + cpuChoice);
    playerLog.innerHTML = "You chose " + arg;
    cpuLog.innerHTML = "Cpu chose " + cpuChoice; 
    return game(arg, cpuChoice);
}

function game(playerChoice, cpuChoice) {
    if (playerChoice == "rock") {
        if (cpuChoice == "rock") {
            return endGame(0);
        } else if (cpuChoice == "paper") {
            return endGame(1);
        } else if (cpuChoice == "scissors") {
            return endGame(2);
        }
    } else if (playerChoice == "paper") {
        if (cpuChoice == "rock") {
            return endGame(2);
        } else if (cpuChoice == "paper") {
            return endGame(0);
        } else if (cpuChoice == "scissors") {
            return endGame(1);
        }
    } else if (playerChoice == "scissors") {
        if (cpuChoice == "rock") {
            return endGame(1);
        } else if (cpuChoice == "paper") {
            return endGame(2);
        } else if (cpuChoice == "scissors") {
            return endGame(0);
        }
    }
}

function endGame(arg) {
    if (arg == 0) {
        gameLog.innerHTML = "Draw!";
    } else if (arg == 1) {
        gameLog.innerHTML = "You lost!";
        totalLose++;
    } else if (arg == 2) {
        gameLog.innerHTML = "You won!";
        totalWins++;
    }

    score.innerHTML = totalWins + " : " + totalLose;
    
    totalGames++;

    
}