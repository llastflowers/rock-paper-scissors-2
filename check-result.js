const checkResult = (playerChoice, computerChoice) => {
    if (playerChoice === 'rock' && computerChoice === 'rock') {
        return 'draw';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'lose';   
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
        return 'draw';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'lose';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'lose';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        return 'draw';
    }};

export default checkResult;