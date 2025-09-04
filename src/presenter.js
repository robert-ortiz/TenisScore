import TennisScorer from './tennisScorer.js';

const scorer = new TennisScorer();
const form = document.querySelector('#Tennis-form');
const resultadoDiv = document.querySelector('#resultado-div');

resultadoDiv.innerHTML = '<p>' + scorer.showScore() + '</p>';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const clickedButton = event.submitter;

  if (clickedButton.textContent.includes('J1')) {
    scorer.player1Scores();
  } else if (clickedButton.textContent.includes('J2')) {
    scorer.player2Scores();
  }

  resultadoDiv.innerHTML = '<p>' + scorer.showScore() + '</p>';
});
