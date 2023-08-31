//creat function name
function rockPaperScissors (a) {
    //display selection
    console.log('you chose' + a)
    //creat variable for rock
const rock = 'rock'
//creat varriable for scissors
const scissors = 'scissors'
//creat varriable for paper 
const paper = 'paper'
// creat an array using rock paper scissors constants? 
let RPS = [rock, paper, scissors,]
//get random variable of rock, paper, or scissors to apply against argument
let RPSToUse = RPS[Math.floor(Math.random() * RPS.length)];
console.log('we chose ' + RPSToUse)
//compare argument to RPSToUse and determin result
// define draw condition
if (a === RPSToUse) {
    return('Draw')
    //define win condition
} else if ((a === 'rock' && RPSToUse === 'scissors') 
|| (a === 'scissors' && RPSToUse === 'paper') 
|| (a === 'paper' && RPSToUse === 'rock')) {
    return('You Win!!!')
    // define loss condition
} else {
    return('You loose, sorry try again!')
}


}