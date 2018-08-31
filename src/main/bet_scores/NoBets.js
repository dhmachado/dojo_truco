import Point from '../Point';
import NoOne from '../NoOne';

class NoBets {
  
  constructor() {
    this.singer = new NoOne();
    this.points = 1;
  }

  getPoints(lastTrickWinner) {
    return new Point(this.singer.challenge(lastTrickWinner), this);
  }

  isEqual(otherBet){
    return otherBet instanceof NoBets;
  }

}

export default NoBets;
