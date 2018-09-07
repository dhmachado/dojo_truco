import Point from '../Point';
import NoOne from '../NoOne';

class NoEnvidoBets {
  
  constructor() {
    this.singer = new NoOne();
    this.points = 0;
  }

  getPoints(lastTrickWinner) {
    return new Point(this.singer.challenge(lastTrickWinner), this);
  }

  isEqual(otherBet){
    return otherBet instanceof NoEnvidoBets;
  }

}

export default NoEnvidoBets;
