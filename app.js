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

//     // make changes to state and dom
//     totalPlays++;
//     const randomThrow = getRandomThrow();
//     const computerChoice = getComputerChoice(randomThrow);
//     const won = playerWon(playerChoice, computerChoice);

//     if (won) {
//         playerWins++;
//     }

//     resultSpan.textContent = randomlyFlippedSide;
//     summarySpan.classList.remove('hidden');
//     updateSpans();
// };

// // add event listeners
// rematchButton.addEventListener('click', playAgain);


shootButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    // compare throws and determine winner??
});

// totalPlays = totalPlays + 1;
// playerWins = playerWins + 1;
// playerLosses = playerLosses + 1;
// playerDraws = playerDraws + 1;