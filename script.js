'use strict';

const check = document.querySelector('.check');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const highScore = document.querySelector('.highscore');
const all = document.querySelector('body');
const hideNumber = document.querySelector('.number');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(text) {
  message.textContent = text;
}

check.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = '';
  if (score.textContent > 1) {
    if (!guessNumber || guessNumber > 20 || guessNumber < 0) {
      displayMessage('No valid Number!');
    } else if (guessNumber == randomNumber) {
      displayMessage('Correct number :)');
      document.querySelector('.guess').value = randomNumber;
      all.style.backgroundColor = '#60b347';
      hideNumber.textContent = randomNumber;
      if (highScore.textContent < score.textContent) {
        highScore.textContent = score.textContent;
      }
    } else if (guessNumber != randomNumber) {
      score.textContent--;
      displayMessage(guessNumber < randomNumber ? 'Too low!' : 'Too high!');
    } else {
      score.textContent--;
      displayMessage('You missed the game!');
    }
  }
});

again.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = 20;
  displayMessage('Start guessing ...');
  all.style.backgroundColor = '#222';
  hideNumber.textContent = '?';
  document.querySelector('.guess').value = '';
});
