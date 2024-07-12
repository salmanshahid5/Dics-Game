const player1 = document.querySelector("player1");
const player2 = document.querySelector("player2");

const player1CurrentScore = document.querySelector("currentScore1");
const player2CurrentScore = document.querySelector("currentScore2");

const player1TotaScore = document.querySelector("totalScore1");
const player2TotaScore = document.querySelector("totalScore2");

const diceImg = document.querySelector('img');

let activePlayer = true;
let score = 0;

function rollDiceHandler(){
    const randomNumber = Math.ceil(Math.random()*6);
    // console.log(randomNumber);

    diceImg.src = `images/${randomNumber}.jpg`;
    score += randomNumber;

    if(activePlayer){
        if(randomNumber==1){
            activePlayer = false;
            player1CurrentScore.innerHTML = 0;
            score = 0;
        }
        else{
            player1CurrentScore.innerHTML = score;
        } 
    }
    
}