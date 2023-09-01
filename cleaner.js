const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';

let playerWins = 0;
let playerLosses = 0;
let draws = 0;

let compChoice;
let playerChoice;

function getWinMessage() {
    return('You win! ' + playerChoice + ' beats ' + compChoice);
}

function getLossMessage() {
    return('You lose! ' + compChoice + ' beats ' + playerChoice)
}

function getDrawMessage() {
    return('We both chose ' + playerChoice + ' draw!')
}

function getCompChoice() {
    let choiceArray = [rock, paper, scissors,];
    compChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return(compChoice);
}

function getPlayerChoice() {
    let playerOptions = prompt('rock paper or scisors?', '');
    playerChoice = playerOptions.toLowerCase();
    return(playerChoice);
}

function playRound() {
    if (playerChoice === compChoice) {
        ++draws;
        let draw = getDrawMessage();
        console.log(draw);
        return(draw);
    } else if 
    ((playerChoice === rock && compChoice == scissors)
    || (playerChoice === scissors && compChoice == paper) 
    || (playerChoice === paper && compChoice === rock)) {
        ++playerWins;
        let win = getWinMessage();
        console.log(win);
        return(win);
    } else {
        ++playerLosses;
        let loss = getLossMessage();
        console.log(loss);
        return(loss);
    }
}

function getScore() {
    return('Wins ' + playerWins + ' | ' 
    + 'Losses ' + playerLosses + ' | '
    + 'Draws ' + draws);
}

function showScore() {
    console.log(getScore());
}

function clearScore() {
    playerWins = 0
    playerLosses = 0
    draws = 0
}

function firstToThree() {
    while (playerWins < 3 && playerLosses < 3) {
        getCompChoice();
        getPlayerChoice();
        playRound();
        showScore();
    }
}

function playGame() {
    clearScore();
    firstToThree();
    if (playerWins > playerLosses) {
        return('Congrats!! you win!!');
    } else {
        return('OOF You lose!!');
    }
}