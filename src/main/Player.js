import Trick from "./Trick";

class Player {

    constructor(name) {
        this.name = name;
    }

    pickup(firstCard, secondCard, thirdCard) {
        this.cards = [firstCard, secondCard, thirdCard];
    }

    play(card, deal) {
        deal.addCardForPlayer(card, this);
        return deal;
    }

    canPlay(player) {
        if (!this.isEqual(player)) throw new Error("It is not your turn !!!");
    }

    trick(currentTrick, previousWinner){
		return new Trick(previousWinner);
    }

    sings(bet, deal) {
        deal.hasBeenSang(bet);
        return deal;
    }

    accepts(deal) {
        return deal;
    }
    
    isEqual(otherPlayer){
    	return this === otherPlayer;
    }

}

export default Player;
