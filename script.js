const botChoiceName = document.querySelector(".bot-choice-name");
const botScore = document.querySelector(".bot-score");
const humanScore = document.querySelector(".human-score");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const result = document.querySelector(".result");

function getComputerChoice() {
    const numberOfChoices = 3;
    const randomNumber = Math.random();
    const settingRange = randomNumber * numberOfChoices;
    const wholeNumber = Math.floor(settingRange)
    if (wholeNumber == 0)
        return 'Rock';
    else if (wholeNumber == 1)
        return 'Paper';
    else if (wholeNumber == 2)
        return 'Scissors';
}

let botscore = 0;
let humanscore = 0;

function updateScores() {
    botScore.textContent = "Bot Score : " + botscore;
    humanScore.textContent = "Your Score : " + humanscore;
}

let round = 0;
function checkWinner() {
    round++;
    if (round == 5) {
        if (botscore > humanscore) {
            result.textContent = result.textContent + " You lose!";
            result.style.color = "orangered";
        } else if (botscore < humanscore) {
            result.textContent = result.textContent + " You Won!";
            result.style.color = "lightgreen";
        } else {
            result.textContent = result.textContent + " Its a tie! Game over...";
            result.style.color = "orange";
        }
        const title = document.querySelector(".title");
        title.textContent = "Wait for 4 seconds to reset...";
        title.style.color = "orangered";
        setTimeout(() => {
            result.textContent = "";
            botChoiceName.textContent = "...";
            botscore = 0;
            humanscore = 0;
            round = 0;
            updateScores();
            title.textContent = "Rock, Paper, Scissors";
            title.style.color = "#e5dded";
        }, 4000);
    }
}

rockButton.addEventListener("click", () => {
    const computerChoiceName = getComputerChoice();
    botChoiceName.textContent = computerChoiceName;
    if (computerChoiceName == "Paper") {
        botscore++;
        result.textContent = "Paper beats rock...";
        result.style.color = "orangered";
    } else if (computerChoiceName == "Scissors") {
        humanscore++;
        result.textContent = "Rock beats scissors...";
        result.style.color = "lightgreen";
    } else if (computerChoiceName == "Rock") {
        result.textContent = "Tie!";
        result.style.color = "orange";
    }
    updateScores();
    checkWinner();
});

paperButton.addEventListener("click", () => {
    const computerChoiceName = getComputerChoice();
    botChoiceName.textContent = computerChoiceName;
    if (computerChoiceName == "Rock") {
        humanscore++;
        result.textContent = "Paper beats rock...";
        result.style.color = "lightgreen";
    } else if (computerChoiceName == "Scissors") {
        botscore++;
        result.textContent = "Scissors beat paper...";
        result.style.color = "orangered";
    } else if (computerChoiceName == "Paper") {
        result.textContent = "Tie!";
        result.style.color = "orange";
    }
    updateScores();
    checkWinner();
});

scissorsButton.addEventListener("click", () => {
    const computerChoiceName = getComputerChoice();
    botChoiceName.textContent = computerChoiceName;
    if (computerChoiceName == "Rock") {
        botscore++;
        result.textContent = "Rock beats scissors...";
        result.style.color = "orangered";
    } else if (computerChoiceName == "Paper") {
        humanscore++;
        result.textContent = "Scissors beat paper...";
        result.style.color = "lightgreen";
    } else if (computerChoiceName == "Scissors") {
        result.textContent = "Tie!";
        result.style.color = "orange";
    }
    updateScores();
    checkWinner();
});