class NoOne {

    constructor() {
        this.name = "No One";
    }

    canPlay(player) {
    }

    trick(currentTrick, previousWinner){
		return currentTrick;
	}

    challenge(otherPlayer) {
        return otherPlayer;
    }

    isEqual(otherPlayer) {
        return otherPlayer instanceof NoOne;
    }

}

export default NoOne;