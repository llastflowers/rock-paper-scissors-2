// initialize/fetch DOM elements
const shootButton = document.getElementById('shoot-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawSpan = document.getElementById('draw');
const resultSpan = document.getElementById('result');
const summarySpan = document.getElementById('summary');
const replayButton = document.getElementById('replay-button');

// set some initial state
let playerWins = 0;
let playerLosses = 0;
let playerDraws = 0;
let totalPlays = 0;

// define DOM utility function
const updateSpans = () => {
    winSpan.textContent = playerWins;
    loseSpan.textContent = playerLosses;
    drawSpan.textContent = playerDraws;
    totalSpan.textContent = totalPlays;
};

const playAgain = () => {
    playerWins = 0;
    playerLosses = 0;
    playerDraws = 0;
    totalPlays = 0;
    summarySpan.classList.add('hidden');
    updateSpans();
};

const getComputerThrow = () => Math.random();
    if (rockPaperScissors <0.34) {
        rockPaperScissors = "rock";
    } else if(rockPaperScissors <=0.67) {
        rockPaperScissors = "paper";
    } else if (rockPaperScissors) >0.67) {
        rockPaperScissors = "scissors";
    }

};

const compareGestures = () => {
    
}

const getRockPaperScissors = () => //???
const playerIsWinner = (playerChoice, computerChoice) => {
    
    if (playerChoice === computerChoice) {
        gameResults.textContent + 'It\'s a Draw!';
}   else if (playerChoice > computerChoice) {}
    else if (playerchoice)
    

    return false;
};

const makeGuess = () => {
    // grab values
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedSide = selectedRadioButton.value;
    // make changes to state and dom
    totalGuesses++;
    const oneOrZero = getOneOrZero();
    const randomlyFlippedSide = getCoinFlip(oneOrZero);
    const won = userDidWin(userSelectedSide, randomlyFlippedSide);

    if (won) {
        correctGuesses++;
    }

    resultSpan.textContent = randomlyFlippedSide;
    summarySpan.classList.remove('hidden');
    updateSpans();
};

// add event listeners
replayButton.addEventListener('click', playAgain);
shootButton.addEventListener('click', chooseGesture);