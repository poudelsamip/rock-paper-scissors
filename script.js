let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#message");
const choices = document.querySelectorAll(".choice");

const uscore = document.querySelector("#userscore");
const cscore = document.querySelector("#compscore");

let userselection = document.querySelector("#userselection");
let compselection = document.querySelector("#compselection");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = () => {
    console.log("game draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        uscore.innerText = userScore;
        msg.innerText = "You Won :) ";
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose :(");
        compScore++;
        cscore.innerHTML = compScore;
        msg.innerText = "You lost :( ";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ",userChoice);
    userselection.innerText = `You Chose: ${userChoice}`;
    const compChoice = genCompChoice();
    // console.log("computer choice = ",compChoice);
    compselection.innerText = `Computer Chose: ${compChoice}`;
    if(userChoice===compChoice) drawGame();
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;

        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

