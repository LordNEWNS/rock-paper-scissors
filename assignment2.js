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
            }
            playThisManyTimes.value = '';
            goToGame()
            
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
    console.log(playerWins, playerLosses, numberOfRounds)
    const title = document.getElementById('title')
    if (numberOfRounds === playerWins || numberOfRounds === playerLosses) {

        // if it is removes selection options & replaces with new game button
        clearBod()
        const button = document.createElement('button');
        button.textContent = 'NEW GAME';
        button.setAttribute('id', 'NEWGAME');
        bod.appendChild(button);

        // changes the large text to game over mesage
        title.textContent = getGameOverMessage();
        if (playerWins > playerLosses) {
            title.color = winColor;
        } else title.color = lossColor;

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

}

function clearBod() {
    while (bod.firstChild) {
        bod.removeChild(bod.firstChild);
    };
}

function updateScoreBoard () {
    let t = document.getElementById('tie');
    setTimeout(() => {t.textContent = draws}, dellayInMs);
    if (draws > 0) {
        t.style.color = tieColor;
    };
    let w = document.getElementById('win');
    setTimeout(() => {w.textContent = playerWins}, dellayInMs);
    if (playerWins > 0) {
        w.style.color = winColor;
    };
    let l = document.getElementById('lose');
    setTimeout(() => {l.textContent = playerLosses}, dellayInMs);
    if (playerLosses > 0) {
        l.style.color = lossColor;
    };
    if (playerWins === 0 && draws === 0 && playerLosses === 0) {
        l.style.color = 'black';
        t.style.color = 'black';
        w.style.color = 'black';
    }

}

// gets the computers choice then checks it against the players to determin winner

function playRound() {
    getCompChoice(); 
    let e = document.getElementById('showMessage');
    e.textContent = '';
    let e2 = document.getElementById('showMessage2');
    if (playerChoice === compChoice) {
        ++draws;
        
        setTimeout(() => {e.textContent = 'TIE!'}, dellayInMs);
        e.style.color = tieColor;

        // change bottom message
        setTimeout(() => {e2.textContent = getDrawMessage()}, dellayInMs);
        e2.style.color = tieColor;
    } else if 
    ((playerChoice === rock && compChoice == scissors)
    || (playerChoice === scissors && compChoice == paper) 
    || (playerChoice === paper && compChoice === rock)) {
        ++playerWins;
        
        setTimeout(() => {e.textContent = 'WIN!'}, dellayInMs);
        e.style.color = winColor;

        setTimeout(() => {e2.textContent = getWinMessage()}, dellayInMs);
        e2.style.color = winColor;
    } else {
        ++playerLosses;
        
        setTimeout(() => {e.textContent = 'LOSS'}, dellayInMs); 
        e.style.color = lossColor;

        setTimeout(() => {e2.textContent = getLossMessage()}, dellayInMs);
        e2.style.color = lossColor;
    };
    updateScoreBoard()
    isGameOver()
};