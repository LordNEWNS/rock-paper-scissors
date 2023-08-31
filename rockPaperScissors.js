//creat function name
function rockPaperScissors (a) {
    //display selection
    console.log(a)
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
console.log(RPSToUse)
//compare input to RPSToUse and determin winner

//make rock beat scissors and lose to paper
//make scissors beat papper and lose to rock
//make papper beat rock and lose to scissors
}