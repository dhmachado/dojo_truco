import Point from '../Point';

class EnvidoBet {
  
  constructor(singer) {
    this.singer = singer;
    this.points = 2;
  }

  setSinger(singer) {
    this.singer = singer;
  }

  getPoints(lastTrickWinner) {
    return new Point(this.singer.challenge(lastTrickWinner), this);
  }

  isEqual(otherBet){
    return otherBet instanceof EnvidoBet;
  }

}

export default EnvidoBet;
