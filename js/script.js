'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if (!guess) {
        displayMessage('🚫 No number!');

        // When player wins
    } else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore.toString();
        }

        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = secretNumber.toString();
        // inline style
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            document.querySelector('.score').textContent = (--score).toString();
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = '0';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
