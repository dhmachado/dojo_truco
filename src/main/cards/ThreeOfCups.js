class ThreeOfCups {
  
  constructor() {
    this.name = "Three of Cups";
  }

    challenge(cardOwner, otherCard, otherPlayer) {
        return otherCard.challengeThrees(cardOwner, otherPlayer);
    }

}

export default ThreeOfCups;
