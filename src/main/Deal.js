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

    setBetSinger(singer) {
        this.betSang.setSinger(singer);
    }

    playerRefusesBet() {
        this.betSang = this.betSang.refused();
    }

    getPoints() {
        return this.currentTrick.getPoints(this.betSang);
    }

}

export default Deal;
