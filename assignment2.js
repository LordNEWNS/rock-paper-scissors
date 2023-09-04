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
            location.reload()
        }
    });


playThisManyTimes.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        const numberEntered = parseFloat(playThisManyTimes.value);
        if (isNaN(numberEntered) || numberEntered < 1) {
            alert('Please enter a number above 0')
        } else {
            numberOfRounds = numberEntered;
        }
        playThisManyTimes.value = '';
        goToGame()
    }
    
});

function goToGame() {
    const bod = document.getElementById('bod');
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
    while (bod.firstChild) {
        bod.removeChild(bod.firstChild);
    };
    bod.appendChild(rockButton);
    bod.appendChild(paperButton);
    bod.appendChild(scisorButton);
}

function isGameOver() {
    console.log(playerWins, playerLosses, numberOfRounds)
    const bod = document.getElementById('bod')
    const title = document.getElementById('title')
    if (numberOfRounds === playerWins || numberOfRounds === playerLosses) {
        while (bod.firstChild) {
            bod.removeChild(bod.firstChild);
        };
        const button = document.createElement('button');
        button.textContent = 'NEW GAME';
        button.setAttribute('id', 'NEWGAME');
        bod.appendChild(button);

        title.textContent = getGameOverMessage();
        if (playerWins > playerLosses) {
            title,color = winColor
        } else title.color = lossColor

    }
};

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

function playRound() {
    getCompChoice(); 
    let e = document.getElementById('showMessage');
    e.textContent = '';
    let e2 = document.getElementById('showMessage2');
    if (playerChoice === compChoice) {
        ++draws;
        
        setTimeout(() => {e.textContent = 'TIE!'}, dellayInMs);
        e.style.color = tieColor;

        // change tie score
        let t = document.getElementById('tie');
        setTimeout(() => {t.textContent = draws}, dellayInMs);
        t.style.color = tieColor;

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

        let t = document.getElementById('win');
        setTimeout(() => {t.textContent = playerWins}, dellayInMs);
        t.style.color = winColor;

        setTimeout(() => {e2.textContent = getWinMessage()}, dellayInMs);
        e2.style.color = winColor;
    } else {
        ++playerLosses;
        
        setTimeout(() => {e.textContent = 'LOSS'}, dellayInMs); 
        e.style.color = lossColor;

        let t = document.getElementById('lose');
        setTimeout(() => {t.textContent = playerLosses}, dellayInMs);
        t.style.color = lossColor;

        setTimeout(() => {e2.textContent = getLossMessage()}, dellayInMs);
        e2.style.color = lossColor;
    };
    isGameOver()
};