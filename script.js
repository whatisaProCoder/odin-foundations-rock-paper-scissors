function getComputerChoice() {
    const numberOfChoices = 3;
    const randomNumber = Math.random();
    const settingRange = randomNumber * numberOfChoices;
    const wholeNumber = Math.floor(settingRange)
    if (wholeNumber == 0)
        return 'rock';
    else if (wholeNumber == 1)
        return 'paper';
    else if (wholeNumber == 2)
        return 'scissors';
}

function getHumanChoice() {
    const humanChoiceNumeric = prompt('Enter your choice : 0 -> rock, 1 -> paper, 2 -> scissors')
    if (humanChoiceNumeric == 0)
        return 'rock';
    else if (humanChoiceNumeric == 1)
        return 'paper';
    else if (humanChoiceNumeric == 2)
        return 'scissors';
    else {
        return 'Undefined choice';
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let message = 'Scraped round...';
        if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore++;
            message = 'Paper beats rock, computer score: +1';
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore++;
            message = 'Paper beats rock, human score : +1';
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            computerScore++;
            message = 'Scissors beats paper, computer score: +1';
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            humanScore++;
            message = 'Scissors beats paper, human score : +1';
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            computerScore++;
            message = 'Rock beats scissors, computer score: +1';
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore++;
            message = 'Rock beats scissors, human score : +1';
        }
        else if (humanChoice == computerChoice) {
            message = 'Its a tie!';
        }
        console.log(`%c${message}`, 'color : red');
    }


    for (let i = 0; i < 5; i++) {
        console.group('Round ' + (i + 1));

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log('Human chose : ' + humanSelection);
        console.log('Computer chose : ' + computerSelection);

        playRound(humanSelection, computerSelection);

        console.groupEnd();
    }

    console.group('Results')
    console.log('Human Score : ' + humanScore);
    console.log('Computer Score : ' + computerScore);

    let message;
    if (humanScore > computerScore)
        message = 'Human won!';
    else if (humanScore < computerScore)
        message = 'Computer won!';
    else
        message = 'Its a tie!';
    console.log(`%c${message}`, 'color : yellow');
    console.groupEnd();
}

playGame();