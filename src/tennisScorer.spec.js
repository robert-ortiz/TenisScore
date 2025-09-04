import TennisScorer from './tennisScorer.js';

describe('TennisScorer', () => {
  //Empieza sin puntos     --> "Love - Love"
  it('game empieza con ambos en cero', () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual('Love - Love');
  });

});
