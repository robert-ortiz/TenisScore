export default class TennisScorer {
  constructor() {
    this.scores = [0, 0];
    this.scoreNames = ['Love', '15', '30', '40'];
  }

  player1Scores() {
    this.scores[0]++;
  }

  player2Scores() {
    this.scores[1]++;
  }

  showScore() {
    return `${this.scoreNames[this.scores[0]]} - ${this.scoreNames[this.scores[1]]}`;
  }
  showScore() {
  const [p1, p2] = this.scores;
  if (p1 >= 3 && p2 >= 3) {
    if (p1 === p2)
     { return 'Deuce';}
    if (p1 - p2 === 1)
      {return 'Advantage Player 1';}
    if (p2 - p1 === 1)
      {return 'Advantage Player 2';}
    if (p1 - p2 >= 2)
      {return 'Game for Player 1';}
    if (p2 - p1 >= 2)
      {return 'Game for Player 2';}
  }
  if (p1 >= 4 && p1 - p2 >= 2)
    {return 'Game for Player 1';}
  if (p2 >= 4 && p2 - p1 >= 2)
    {return 'Game for Player 2';}
  return `${this.scoreNames[Math.min(p1, 3)]} - ${this.scoreNames[Math.min(p2, 3)]}`;
}

}
