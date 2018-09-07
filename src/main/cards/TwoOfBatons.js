import EnvidoBet from "../bet_scores/EnvidoBet";

class TwoOfBatons {

    constructor() {
      this.name = "Two of Batons";
      this.suit = "Batons";
    }
  
    challenge(cardOwner, otherCard, otherPlayer) {
      return otherCard.challengeThrees(cardOwner, otherPlayer);
    }

    addEnvidoPoints(otherCard) {
      return otherCard.addEnvidoPointsForTwo(this.suit);
    }

    addEnvidoPointsForAce(otherCardSuit) {
      if(otherCardSuit === this.suit) {
          return 23;
      }
      return 2;
    }

    dameElEnvidoCon(otraCarta) {
      if(otraCarta.suit === this.suit) {
        return new EnvidoOfSameSuit(this, otraCarta);
        this.sumateConOtraDelMismoPalo(otraCarta);
      }
      return new EnvidoOfDifferentSuit(this, otraCarta);
      this.challengeForMax(otraCarta);

      this = 1 de espada
      otraCarta = 7 de copa

    }
  
  }
  
  export default TwoOfBatons;
  