const body = document.querySelector("body");
const message = document.querySelector(".message");
const scores = document.querySelector(".score");
const btns = document.querySelectorAll("button");

body.style.textAlign = "center";

const handChoice = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", playingRockPaperScissors)
}

function playingRockPaperScissors(event) {
    let playerChoice = event.target.innerText;
    let randomChoice = Math.floor(Math.random() * handChoice.length);
    let computerChoice = handChoice[randomChoice];

    let board = {
        Rock: ["Paper", "Scissors", "Rock"],
        Paper: ["Scissors", "Rock", "Paper"],
        Scissors: ["Rock", "Paper", "Scissors"]
    }

    let winLoseOrTide = board[computerChoice].indexOf(playerChoice);
    let result;

    console.log(`You chosed ${playerChoice} and the Computer chosed ${computerChoice}, You ${result}.`);

    if (winLoseOrTide === 0) {
        result = "win";
        playerScore++;
    } else if (winLoseOrTide === 1) {
        result = "lose";
        computerScore++;
    } else {
        result = "Tide";
    }

    message.innerHTML = `You chosed ${playerChoice} || Computer chosed ${computerChoice}<br>You ${result} this round!`;
    scores.innerHTML = `Scores<br>Player ${playerScore} || Computer ${computerScore}`;

}