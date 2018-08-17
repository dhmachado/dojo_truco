class NoBets {
  
  constructor() {
    this.points = 1;
  }

  isEqual(otherBet){
    return otherBet instanceof NoBets;
  }

}

export default NoBets;
