class TenOfCups {
  
    constructor() {
      this.name = "Ten of Cups";
      this.suit = "Cups";
    }
  
      challenge(cardOwner, otherCard, otherPlayer) {
          return otherCard.challengeTens(cardOwner, otherPlayer);
      }
  
      addEnvidoPointsForTwo(otherCardSuit) {
        if(otherCardSuit === this.suit) {
            return 22;
        }
        return 2;
      }

      addEnvidoPointsForAce(otherCardSuit) {
        if(otherCardSuit === this.suit) {
            return 21;
        }
        return 1;
      }

  }
  
  export default TenOfCups; 