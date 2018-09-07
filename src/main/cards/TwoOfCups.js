class TwoOfCups {
  
  constructor() {
    this.name = "Two of Cups";
  }

    challenge(cardOwner, otherCard, otherPlayer) {
        return otherCard.challengeThrees(cardOwner, otherPlayer);
    }

    challengeTens(otherPlayer, cardOwner) {
      return cardOwner;
    }

}

export default TwoOfCups;
