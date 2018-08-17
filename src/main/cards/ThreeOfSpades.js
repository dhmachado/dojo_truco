class ThreeOfSpades {

  constructor() {
    this.name = "Three of Spades";
  }

  challenge(cardOwner, otherCard, otherPlayer) {
    return otherCard.challengeThrees(cardOwner, otherPlayer);
  }

}

export default ThreeOfSpades;
