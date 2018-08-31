import TrickBet from "./TrickBet";
import Point from '../Point';
import NoOne from '../NoOne';

class ReTrickBet {
  
  constructor() {
    this.singer = new NoOne();
    this.points = 3;
  }

  setSinger(singer) {
    this.singer = singer;
  }

  refused() {
    let bet = new TrickBet();
    bet.setSinger(this.singer);
    return bet;
  }

  getPoints(lastTrickWinner) {
    return new Point(this.singer.challenge(lastTrickWinner), this);
  }

  isEqual(otherBet){
    return otherBet instanceof ReTrickBet;
  }

}

export default ReTrickBet;
