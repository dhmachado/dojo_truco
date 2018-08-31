import NoCard from './cards/NoCard';
import NoOne from './NoOne';

class Trick {

    constructor(previousWinner){
      this.previousCard = new NoCard();
      this.previousPlayer = new NoOne();
		  this.winner = new NoOne();
      this.previousWinner = previousWinner;
    }
    
    addCardForPlayer(card, player) {
      this.previousWinner.canPlay(player);
      this.winner = this.previousCard.challenge(this.previousPlayer, card, player);

      this.previousCard = card;
    	this.previousPlayer = player;
    	this.previousWinner = this.winner;
      
      return this.winner.trick(this, this.previousWinner);
    }

    getPoints(betSang) {
      return betSang.getPoints(this.previousWinner);
    }

}

export default Trick;
