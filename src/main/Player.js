import Trick from "./Trick";
import NoOne from "./NoOne";
import EnvidoBet from "./bet_scores/EnvidoBet";
import AsOfBatons from "./cards/AsOfBatons";

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

    singsEnvido(deal) {
        let bet = new EnvidoBet(this);
        deal.envidoBetHasBeenSang(bet);
        return deal;
    }

    acceptsEnvido(deal) {
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

    tellsHisEnvidoPoints(deal) {
        deal.playerTellsHisEnvidoPoints(this, this.envidoPoints());
        return deal;
    }

    envidoPoints() {
        let envidos = [];

        let cartas = [this.cards[0], this.cards[1]];
        envidos.push(cartas[0].dameEnvido(cartas[1]));

        

        /*let duples = [];
        this.cards.forEach(function(element, index, array) {          
            duples.push(
                array.filter(function(value2, index2, arr2){
                    return value2.name != element.name;
                })
            );
        });

        let envidos = [];
        duples.forEach(function(el, i, arr) {
            envidos.push(el[0].addEnvidoPoints(el[1]));
        });

        console.log(envidos);*/

        return this.cards;
    }

    challenge(otherPlayer) {
        return this;
    }

    isEqual(otherPlayer){
    	return this === otherPlayer;
    }

}

export default Player;
