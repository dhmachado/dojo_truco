import { expect } from 'chai';

import Deal from '../../main/Deal';
import Point from '../../main/Point';
import Player from '../../main/Player';

import NoBets from '../../main/bets/NoBets';

import AceOfSpades from '../../main/cards/AceOfSpades';
import AceOfBatons from '../../main/cards/AceOfBatons';
import ThreeOfSpades from '../../main/cards/ThreeOfSpades';
import SevenOfBatons from '../../main/cards/SevenOfBatons';
import FourOfBatons from '../../main/cards/FourOfBatons';
import FourOfCups from '../../main/cards/FourOfCups';

describe('Acceptance tests - ', () => {
  
  it("John plays the Ace of Spades then" + 
    " Mark plays the Four of Batons then"+
    " John is the winner of the first trick then" + 
    " John plays the Three of Spades then" +
    " Mark plays the Ace of Batons then" +
    " Mark is the winner of the second trick then" + 
    " Mark plays the Seven of Batons then" +
    " John plays the Four of Cups then" +
    " Mark wins the deal where there where No Bets", () => {

    let john = new Player("John");
    let mark = new Player("Mark");

    let deal = new Deal();

    john.pickup(new AceOfSpades(), new ThreeOfSpades(), new FourOfCups());
    mark.pickup(new AceOfBatons(), new FourOfBatons(), new SevenOfBatons());

    deal = john.play(new AceOfSpades(), deal);
    deal = mark.play(new FourOfBatons(), deal);

    deal = john.play(new ThreeOfSpades(), deal);
    deal = mark.play(new AceOfBatons(), deal);

    deal = mark.play(new SevenOfBatons(), deal);
    deal = john.play(new FourOfCups(), deal);

    expect(deal.getPoints().isEqual(new Point(mark, [new NoBets()]))).to.be.true;
  });  

});
