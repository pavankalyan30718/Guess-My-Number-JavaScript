'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

//Defining a secret number (at the starting of the application)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//first step is that we have to chose, where the event should happen ('here it is Check button')
//get Class of button from index.html

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//AddEventListener is a method to listen to event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there's no input
  if (!guess) {
    displayMessage('🔕No Number!');
  }
  //when the guess is correct
  else if (guess == secretNumber) {
    displayMessage('🥳Correct Number!...🎉');
    document.querySelector('.number').textContent = secretNumber;

    //manipulating/changing CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Implementing highscore
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High📈' : 'Too Low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game 🥲😞');
    }
  }
  /*
  //when the guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent('You Lost the Game 🥲😞');
    }
  }
  //when the guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 🥲😞';
    }
  }
  */
});

//AddEventListener for Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
