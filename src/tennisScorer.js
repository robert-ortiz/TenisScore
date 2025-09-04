export default class TennisScorer {
  constructor() {
    this.scores = [0, 0]; // [player1, player2]
    this.scoreNames = ['Love', '15', '30', '40'];
  }

  showScore() {
    return `${this.scoreNames[this.scores[0]]} - ${this.scoreNames[this.scores[1]]}`;
  }
}
