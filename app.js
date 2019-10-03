import checkResult from './check-result.js';

// initialize/fetch DOM elements
const shootButton = document.getElementById('shoot-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawSpan = document.getElementById('draw');
const resultSpan = document.getElementById('result');
const summarySpan = document.getElementById('summary');
const rematchButton = document.getElementById('replay-button');

// set some initial state
let playerWins = 0;
let playerLosses = 0;
let playerDraws = 0;
let totalPlays = 0;

// define DOM utility function
const playAgain = () => {
    totalSpan.textContent = totalPlays;
    winSpan.textContent = playerWins;

};

const updateSpans = () => {
    winSpan.textContent = playerWins;
    loseSpan.textContent = playerLosses;
    drawSpan.textContent = playerDraws;
    totalSpan.textContent = totalPlays;
};

// const playAgain = () => {
//     playerWins = 0;
//     playerLosses = 0;
//     playerDraws = 0;
//     totalPlays = 0;
//     summarySpan.classList.add('hidden');
//     updateSpans();
// };
        // grab values

const selectedRadioImage = document.querySelector('input:checked');
const userSelectedImage = selectedRadioImage.value;

       // make changes to state and dom
totalPlays++;
const randomNumber = getRandomThrow();
const computerChoice = getComputerChoice(randomNumber);
const win = playerWon(playerChoice, computerChoice);
const lose = playerLost(playerChoice, computerChoice);
const draw = itsADraw(playerChoice, computerChoice);

if (win) {
    playerWins++;
} if (lose) {
    playerLosses++;
} if (draw) {
    itsADraw++;
}

let result = checkResult(playerChoice, computerChoice);   

if (result === 'win') {
    gameResults.textContent = 'You Won!';
} else if (result === 'lose'){
    gameResults.textContent = 'You Lost!';
} else if (result === 'draw'){
    gameResults.textContent = 'It\'s a Draw!';
}

// // add event listeners


shootButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    totalPlays = totalPlays + 1;
    playerWins = playerWins + 1;
    playerLosses = playerLosses + 1;
    playerDraws = playerDraws + 1;
    
    totalSpan.textContent = totalPlays;
    winSpan.textContent = totalPlays;
    loseSpan.textContent = totalPlays;
    drawSpan.textContent = totalPlays;

    // compare throws and determine winner??
});