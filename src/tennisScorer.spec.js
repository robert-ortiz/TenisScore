import TennisScorer from './tennisScorer.js';

describe('TennisScorer', () => {
  it('game empieza con ambos en cero', () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual('Love - Love');
  });

  it('Jugador 1 anota', () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual('15 - Love');
  });
  it('Jugador 2 anota', () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual('15 - 15');
  });
  it('Jugador 2 anota y llega a Deuce', () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual('Deuce');
  });
});
