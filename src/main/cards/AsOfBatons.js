class AsOfBatons {
  
  constructor() {
    this.name = "As of Batons";
    this.suit = "Batons";
  }

  challengeThrees(otherPlayer, cardOwner) {
    return cardOwner;
  }

  addEnvidoPoints(otherCard) {
    return otherCard.addEnvidoPointsForAce(this.suit);
  }

}

export default AsOfBatons;
