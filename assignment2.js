const playerSelection = document.querySelectorAll('.btn');
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';
let compChoice;
let playerChoice;
let playerWins = 0;
let playerLosses = 0;
let draws = 0;
const dellayInMs = 200 
const displaMessage = document.querySelector('#message')

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
        
        // change game status message
        let e = document.getElementById('showMessage');
        e.textContent = '';
        setTimeout(() => {e.textContent = 'TIE!'}, dellayInMs);
        e.style.color = 'grey';

        // change tie score
        let t = document.getElementById('tie');
        setTimeout(() => {t.textContent = draws}, dellayInMs);
        t.style.color = 'grey';

        // change bottom message
        let e2 = document.getElementById('showMessage2');
        setTimeout(() => {e2.textContent = getDrawMessage()}, dellayInMs);
        e2.style.color = 'grey';
        return(draw);
    } else if 
    ((playerChoice === rock && compChoice == scissors)
    || (playerChoice === scissors && compChoice == paper) 
    || (playerChoice === paper && compChoice === rock)) {
        ++playerWins;
        let win = getWinMessage();
        let e = document.getElementById('showMessage');
        e.textContent = '';
        setTimeout(() => {e.textContent = 'WIN!'}, dellayInMs);
        e.style.color = 'greenyellow';

        let t = document.getElementById('win');
        setTimeout(() => {t.textContent = playerWins}, dellayInMs);
        t.style.color = 'greenyellow';

        let e2 = document.getElementById('showMessage2');
        setTimeout(() => {e2.textContent = getWinMessage()}, dellayInMs);
        e2.style.color = 'greenyellow';
        return(win);
    } else {
        ++playerLosses;
        let loss = getLossMessage();
        console.log(loss);
        let e = document.getElementById('showMessage');
        e.textContent = '';
        setTimeout(() => {e.textContent = 'LOSS'}, dellayInMs); 
        e.style.color = 'rgb(109, 30, 6)';

        let t = document.getElementById('lose');
        setTimeout(() => {t.textContent = playerLosses}, dellayInMs);
        t.style.color = 'rgb(109, 30, 6)';

        let e2 = document.getElementById('showMessage2');
        setTimeout(() => {e2.textContent = getLossMessage()}, dellayInMs);
        e2.style.color = 'rgb(109, 30, 6)';
        return(loss);
    }
};