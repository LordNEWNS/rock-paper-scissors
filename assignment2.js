const playThisManyTimes = document.getElementById('thisMany')
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';
let compChoice;
let playerChoice;
let playerWins = 0;
let playerLosses = 0;
let draws = 0;
const dellayInMs = 200 ;
const displaMessage = document.querySelector('#message');
let numberOfRounds = 0;
const winColor = 'greenyellow'
const lossColor = 'rgb(109, 30, 6)'
const tieColor = 'grey'
const title = document.getElementById('title')
const messageTop = document.getElementById('showMessage');
const messageBottom = document.getElementById('showMessage2');


const bod = document.getElementById('bod');
    bod.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            playerChoice = e.target.id;
            playRound();
        } else if (e.target.id === 'NEWGAME') {
            backToStart()
        }
    });



bod.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        if (e.target.id === 'thisMany') {
            const numberEntered = parseFloat(e.target.value);
            if (isNaN(numberEntered) || numberEntered < 1) {
                alert('Please enter a number above 0')
            } else {
                numberOfRounds = numberEntered;
                goToGame()
            }
            playThisManyTimes.value = '';
            
            
        }
    }
});

// removes rounds input and replaces with buttons
function goToGame() {
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scisorButton = document.createElement('button');
    rockButton.setAttribute('id', 'ROCK');
    rockButton.textContent = 'ROCK!';
    rockButton.classList.add('btn')
    paperButton.setAttribute('id', 'PAPER');
    paperButton.textContent = 'PAPER!';
    paperButton.classList.add('btn')
    scisorButton.setAttribute('id', 'SCISSORS');
    scisorButton.textContent = 'SCISSORS!';
    scisorButton.classList.add('btn')
    clearBod()
    bod.appendChild(rockButton);
    bod.appendChild(paperButton);
    bod.appendChild(scisorButton);
}

// checks if wins or losses is = the number of rounds required to win

function isGameOver() {
    if (numberOfRounds === playerWins || numberOfRounds === playerLosses) {

        // this removes selection options & replaces with new game button
        clearBod()
        setTimeout(() => {messageTop.textContent = ''}, dellayInMs + 5);
        const button = document.createElement('button');
        button.textContent = 'NEW GAME';
        button.setAttribute('id', 'NEWGAME');
        bod.appendChild(button);

        // changes the large text to game over mesage
        title.textContent = getGameOverMessage();
        if (playerWins > playerLosses) {
            title.style.color = winColor;
            setTimeout(() => {messageBottom.textContent = 'NICE! NICE! NICE!'}, dellayInMs + 5);
        } else {
            title.style.color = lossColor;
            setTimeout(() => {messageBottom.textContent = 'Try Agian?'}, dellayInMs + 5);
        }

    }
};

// messages 

function getGameOverMessage() {
    if (playerWins > playerLosses) {
        return('Congrats! you won ' + playerWins + ' to ' + playerLosses);
    } else {
        return('OOF you lost ' + playerLosses + ' to ' + playerWins)
    }
};
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

// resets the page to "best of?" card
function backToStart() {
    clearBod();
    playerWins = 0;
    playerLosses = 0;
    draws = 0;
    updateScoreBoard()
    const howManyCard = document.createElement('div');
    howManyCard.setAttribute('id', 'howMany');
    const howManyh3 = document.createElement('h3');
    howManyh3.textContent = 'Best of?';
    howManyCard.appendChild(howManyh3);
    const inputRoundsHere = document.createElement('input');
    inputRoundsHere.setAttribute('type', 'number');
    inputRoundsHere.setAttribute('id', 'thisMany');
    howManyCard.appendChild(inputRoundsHere);
    bod.appendChild(howManyCard);
    title.textContent = 'Rock, Paper, or Scissors?';
    title.style.color = 'white';
    messageBottom.textContent = 'Who will win, Man or MAchine?'
    messageBottom.style.color = 'white'

}

function clearBod() {
    while (bod.firstChild) {
        bod.removeChild(bod.firstChild);
    };
}

function updateScoreBoard () {
    let t = document.getElementById('tie');
    if (draws > 0) {
        setTimeout(() => {t.style.color = tieColor}, dellayInMs);
        setTimeout(() => {t.textContent = draws}, dellayInMs);
    };
    let w = document.getElementById('win');
    if (playerWins > 0) {
        setTimeout(() => {w.style.color = winColor}, dellayInMs);
        setTimeout(() => {w.textContent = playerWins}, dellayInMs);
    };
    let l = document.getElementById('lose');
    if (playerLosses > 0) {
        setTimeout(() => {l.textContent = playerLosses}, dellayInMs);
        setTimeout(() => {l.style.color = lossColor}, dellayInMs);
    };
    if (playerWins === 0 && draws === 0 && playerLosses === 0) {
        t.textContent = draws
        w.textContent = playerWins
        l.textContent = playerLosses
        l.style.color = 'black';
        t.style.color = 'black';
        w.style.color = 'black';
    }

}

// gets the computers choice then checks it against the players to determin winner

function playRound() {
    getCompChoice(); 
    messageTop.textContent = '';
    messageBottom.textContent = '';
    if (playerChoice === compChoice) {
        ++draws;
        
        setTimeout(() => {messageTop.textContent = 'TIE!'}, dellayInMs);
        messageTop.style.color = tieColor;

        // change bottom message
        setTimeout(() => {messageBottom.textContent = getDrawMessage()}, dellayInMs);
        messageBottom.style.color = tieColor;
    } else if 
    ((playerChoice === rock && compChoice == scissors)
    || (playerChoice === scissors && compChoice == paper) 
    || (playerChoice === paper && compChoice === rock)) {
        ++playerWins;
        
        setTimeout(() => {messageTop.textContent = 'WIN!'}, dellayInMs);
        messageTop.style.color = winColor;

        setTimeout(() => {messageBottom.textContent = getWinMessage()}, dellayInMs);
        messageBottom.style.color = winColor;
    } else {
        ++playerLosses;
        
        setTimeout(() => {messageTop.textContent = 'LOSS'}, dellayInMs); 
        messageTop.style.color = lossColor;

        setTimeout(() => {messageBottom.textContent = getLossMessage()}, dellayInMs);
        messageBottom.style.color = lossColor;
    };
    updateScoreBoard()
    isGameOver()
};