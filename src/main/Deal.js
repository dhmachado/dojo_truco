import Trick from './Trick';
import NoOne from './NoOne';
import NoBets from "./bet_scores/NoBets";
import NoEnvidoBets from "./bet_scores/NoEnvidoBets";
import EnvidoPoints from './EnvidoPoints';

class Deal {

    constructor() {
        this.betSang = new NoBets();
        this.envidoBetSang = new NoEnvidoBets();
        this.currentTrick = new Trick(new NoOne());
        this.envidoPointsSang = [];
    }

    addCardForPlayer(card, player) {
        this.currentTrick = this.currentTrick.addCardForPlayer(card, player);
    }

    hasBeenSang(bet) {
        this.betSang = bet;
    }

    envidoBetHasBeenSang(bet) {
        this.envidoBetSang = bet;
    }

    setBetSinger(singer) {
        this.betSang.setSinger(singer);
    }

    playerRefusesBet() {
        this.betSang = this.betSang.refused();
    }

    playerTellsHisEnvidoPoints(player, playerPoints) {
        this.envidoPointsSang.push(new EnvidoPoints(player, playerPoints));
    }

    getPoints() {
        return this.currentTrick.getPoints(this.betSang);
    }

}

export default Deal;
