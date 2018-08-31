import Trick from "./Trick";
import NoOne from "./NoOne";
import TrickBet from "./bet_scores/TrickBet";

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
        bet.setSinger(this);
        deal.hasBeenSang(bet);
        return deal;
    }

    accepts(deal) {
        deal.setBetSinger(new NoOne());
        return deal;
    }
    
    refuses(deal) {
        deal.playerRefusesBet();
        return deal;
    }

    challenge(otherPlayer) {
        return this;
    }

    isEqual(otherPlayer){
    	return this === otherPlayer;
    }

}

export default Player;
