import Trick from './Trick';
import NoOne from './NoOne';
import NoBets from "./bet_scores/NoBets";

class Deal {

    constructor() {
        this.betSang = new NoBets();
        this.currentTrick = new Trick(new NoOne());
    }

    addCardForPlayer(card, player) {
        this.currentTrick = this.currentTrick.addCardForPlayer(card, player);
    }

    hasBeenSang(bet) {
        this.betSang = bet;
    }

    getPoints() {
        return this.currentTrick.getPoints(this.betSang);
    }

}

export default Deal;
