class TrickBet {
  
  constructor() {
    this.points = 2;
  }

  isEqual(otherBet){
    return otherBet instanceof TrickBet;
  }

}

export default TrickBet;
