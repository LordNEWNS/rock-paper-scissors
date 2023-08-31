//creat variable for rock
const rock = 'rock'
//creat varriable for scissors
const scissors = 'scissors'
//creat varriable for paper 
const paper = 'paper'

// creat variables for compchoice and player choice
let computerChoice = 'rock'
let playerSelection = 'paper'

// creat varriables for pc and player wins
let compWins = 0
let playerWins = 0
let draw = 0

// creat message calls

function youLose() {
    return ('you lose! ' + computerChoice + ' beats ' + playerSelection);
}
function youWin() {
    return (playerSelection + ' beats ' + computerChoice + ' YOU WIN!');
}

function youDraw() {
    return (' we both chose ' + computerChoice + ' its a draw!');
}

// get computer choice

function getComputerChoice () {
    // creat an array using rock paper scissors constants? 
    let RPS = [rock, paper, scissors,]
    //get random variable of rock, paper, or scissors to apply against argument
    let RPSToUse = RPS[Math.floor(Math.random() * RPS.length)];
    return(RPSToUse)
}

function replaceComp() {

    computerChoice = getComputerChoice()

}

function getPlayerSelection() {
    let choice = prompt('rock paper or scissors?', '');
    playerSelection = choice
    return(choice)
}

function replacePlayer() {
    playerSelection = getPlayerSelection()
}

function playRPS (playerSelection, computerChoice) {

    // convert playrs input to lowercase
    let c = playerSelection.toLowerCase()
    if (c === computerChoice) {

        return(youDraw())
        //define win condition
    } else if ((c === 'rock' && computerChoice === 'scissors') 
    || (c === 'scissors' && computerChoice === 'paper') 
    || (c === 'paper' && computerChoice === 'rock')) {

        return(youWin())
        // define loss condition
    } else {
        return(youLose())
    }
    
}

function clearScore() {
    playerWins = 0;
    compWins = 0;
    draw = 0;
}


function game() {
    clearScore()
    //creat verriable for games played
    // loop game 5 times
    for (let gamesPlayed = 0; (playerWins < 3 && compWins < 3); gamesPlayed++) {
        // run the game
        replacePlayer()
        replaceComp()
        playRPS(playerSelection, computerChoice)
        console.log(playRPS(playerSelection, computerChoice))

        // set conditions for score increase

        if (playRPS(playerSelection, computerChoice) === youWin()) {
            playerWins = ++playerWins;
        
        } else if (playRPS(playerSelection, computerChoice) === youLose()) {
            compWins = ++compWins
        
        } else {
            draw = ++draw
        
        }
        console.log('draws ' + draw + '| wins ' + playerWins + '| losses ' + compWins)

    }
}

// creat function to call game() and mesure total score and declare winner

function startGame() {
    //calls game
    game()
    //mesure score and compare 
    if (playerWins > compWins) {
        // creat win message
        console.log('Congradulations! you win witha  score of ' + playerWins + ' VS ' + compWins)
    } else {
        //creat loss message
        console.log('Sorry! you lose ' + compWins + ' to ' + playerWins)
    }

}