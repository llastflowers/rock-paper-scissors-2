import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// initialize/fetch DOM elements
const shootButton = document.getElementById('shoot-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawSpan = document.getElementById('draw');
const summarySpan = document.getElementById('summary');
const computerChose = document.getElementById('computer-chose');

// set some initial state
let playerWins = 0;
let playerLosses = 0;
let playerDraws = 0;
let totalPlays = 0;

// define DOM utility function

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
const playerChoice = selectedRadioImage.value;

       // make changes to state and dom
const resultChecker = () => {
    const computerChoice = getRandomThrow();
    const result = checkResult(playerChoice, computerChoice);   
    computerChose.textContent = computerChoice;
    if (result === 'win') {
        summarySpan.textContent = 'You Won!';
        playerWins++;
    } else if (result === 'lose'){
        summarySpan.textContent = 'You Lost!';
        playerLosses++;
    } else if (result === 'draw'){
        summarySpan.textContent = 'It\'s a Draw!';
        playerDraws++;
    }
    winSpan.textContent = playerWins;
    loseSpan.textContent = playerLosses;
    drawSpan.textContent = playerDraws;
    totalSpan.textContent = totalPlays;
};

// // add event listeners
shootButton.addEventListener('click', () => {
    totalPlays++;
    resultChecker();

});