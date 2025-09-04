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
});
