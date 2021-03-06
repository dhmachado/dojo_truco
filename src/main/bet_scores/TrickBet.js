import Point from '../Point';
import NoOne from '../NoOne';

class TrickBet {
  
  constructor() {
    this.singer = new NoOne();
    this.points = 2;
  }

  setSinger(singer) {
    this.singer = singer;
  }

  getPoints(lastTrickWinner) {
    return new Point(this.singer.challenge(lastTrickWinner), this);
  }

  isEqual(otherBet){
    return otherBet instanceof TrickBet;
  }

}

export default TrickBet;
