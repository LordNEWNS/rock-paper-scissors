//creat variable for rock
const rock = 'rock'
//creat varriable for scissors
const scissors = 'scissors'
//creat varriable for paper 
const paper = 'paper'

const computerChoice = getComputerChoice()
const playerSelection = getPlayerSelection()

// define win and loss messages

const youLose = 'you lose! ' + computerChoice + ' beats ' + playerSelection
const youWin = playerSelection + ' beats ' + computerChoice + ' YOU WIN!'
const youDraw = ' we both chose ' + computerChoice + ' its a draw!'

// get computer choice

function getComputerChoice () {
    // creat an array using rock paper scissors constants? 
let RPS = [rock, paper, scissors,]
//get random variable of rock, paper, or scissors to apply against argument
let RPSToUse = RPS[Math.floor(Math.random() * RPS.length)];

return(RPSToUse)
}

function getPlayerSelection() {
    let playerSelection = prompt('rock paper or scissors?', '');
    return(playerSelection)
}

function playRPS (playerSelection, computerChoice) {
    // convert playrs input to lowercase
    let c = playerSelection.toLowerCase()
    let RPSToUse = computerChoice
    if (c === RPSToUse) {
        return(youDraw)
        //define win condition
    } else if ((c === 'rock' && RPSToUse === 'scissors') 
    || (c === 'scissors' && RPSToUse === 'paper') 
    || (c === 'paper' && RPSToUse === 'rock')) {
        return(youWin)
        // define loss condition
    } else {
        return(youLose)
    }
}
console.log(playRPS(playerSelection, computerChoice))

function game () {

    //creat verriable for games played
    // loop game 5 times
    for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
        // creat varriables for pc and player wins
    let compWins = 0
    let playerWins = 0

    }

    
    
}

