import NoOne from "../NoOne";

class NoCard {

    constructor() {
        this.name = "No card";
    }

    challenge(cardOwner, otherCard, otherPlayer) {
        return new NoOne();
    }

}

export default NoCard;