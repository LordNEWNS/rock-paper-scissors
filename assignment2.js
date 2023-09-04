const playerSelection = document.querySelectorAll('.btn');
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';
let compChoice;
let playerChoice;
let playerWins = 0;
let playerLosses = 0;
let draws = 0;

playerSelection.forEach(btn => {
    btn.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        console.log(playerChoice);
        playRound();
    });
});

function getWinMessage() {
    return('You win! ' + playerChoice + ' beats ' + compChoice);
};

function getLossMessage() {
    return('You lose! ' + compChoice + ' beats ' + playerChoice);
};

function getDrawMessage() {
    return('We both chose ' + playerChoice + ' draw!');
};

function getCompChoice() {
    let choiceArray = [rock, paper, scissors,];
    compChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return(compChoice);
};

function playRound() {
    getCompChoice(); 
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
};