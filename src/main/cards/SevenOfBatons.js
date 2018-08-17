class SevenOfBatons {

  constructor() {
    this.name = "Seven of Batons";
  }

  challenge(cardOwner, otherCard, otherPlayer) {
    return otherCard.challengeFakeSevens(cardOwner, otherPlayer);
  }

}

export default SevenOfBatons;
