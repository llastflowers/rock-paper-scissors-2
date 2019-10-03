const getRandomThrow = () => {
    const randomNumber = Math.random();
 
    if (randomNumber < 0.34) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else if (randomNumber > 0.67) {
        return 'scissors';

    }
};

export default getRandomThrow;