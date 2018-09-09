class ThreeOfSpades {

    constructor() {
        this.name = "Three of Spades";
    }

    challenge(otherCard) {
        return otherCard.challengeThree(this);
    }

}

export default ThreeOfSpades;