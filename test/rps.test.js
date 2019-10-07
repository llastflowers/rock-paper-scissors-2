// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareChoices from '../check-result.js';
const test = QUnit.test;

test('test should return "draw" if player choice and computer choice are both rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'rock';
    let playerChoice = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('test should return "draw" if player choice and computer choice are both paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'paper';
    let playerChoice = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('test should return "draw" if player choice and computer choice are both scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'scissors';
    let playerChoice = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('test should return "win" if player choice is paper and computer choice is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'rock';
    let playerChoice = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('test should return "lose" if player choice is scissors and computer choice is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'rock';
    let playerChoice = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('test should return "lose" if player choice is rock and computer choice is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'paper';
    let playerChoice = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('test should return "win" if player choice is scissors and computer choice is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'paper';
    let playerChoice = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('test should return "win" if player choice is rock and computer choice is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'scissors';
    let playerChoice = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('test should return "lose" if player choice is paper and computer choice is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let computerChoice = 'scissors';
    let playerChoice = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareChoices(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});
