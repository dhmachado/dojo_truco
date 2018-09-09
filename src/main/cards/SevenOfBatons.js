class SevenOfBatons {

    constructor() {
        this.name = "Seven of Batons";
    }

    challenge(otherCard) {
        return otherCard.challengeSeven(this);
    }

}

export default SevenOfBatons;