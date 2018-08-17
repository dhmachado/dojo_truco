import { expect } from 'chai';

import Deal from '../../main/Deal';
import Point from '../../main/Point';
import Player from '../../main/Player';

import NoBets from '../../main/bet_scores/NoBets';
import TrickBet from "../../main/bet_scores/TrickBet";

import AsOfSpades from '../../main/cards/AsOfSpades';
import AsOfBatons from '../../main/cards/AsOfBatons';
import ThreeOfSpades from '../../main/cards/ThreeOfSpades';
import SevenOfBatons from '../../main/cards/SevenOfBatons';
import FourOfCups from '../../main/cards/FourOfCups';
import FourOfBatons from "../../main/cards/FourOfBatons";
import ThreeOfCups from "../../main/cards/ThreeOfCups";

describe('Acceptance tests - ', () => {

  it("John plays the As of Spades then" + 
    " Mark plays the Four of Batons then"+
    " John is the winner of the first trick then" + 
    " John plays the Three of Spades then" +
    " Mark plays the As of Batons then" +
    " Mark is the winner of the second trick then" + 
    " Mark plays the Seven of Batons then" +
    " John plays the Four of Cups then" +
    " Mark wins the deal where there where No Bets", () => {

    let john = new Player("John");
    let mark = new Player("Mark");

    let deal = new Deal();

    john.pickup(new AsOfSpades(), new ThreeOfSpades(), new FourOfCups());
    mark.pickup(new AsOfBatons(), new FourOfBatons(), new SevenOfBatons());

    deal = john.play(new AsOfSpades(), deal);
    deal = mark.play(new FourOfBatons(), deal);

    deal = john.play(new ThreeOfSpades(), deal);
    deal = mark.play(new AsOfBatons(), deal);

    deal = mark.play(new SevenOfBatons(), deal);
    deal = john.play(new FourOfCups(), deal);

    expect(deal.getPoints().isEqual(new Point(mark, new NoBets()))).to.be.true;
  });

  it("Mark plays the Three of Spades then" +
    " John plays the As of batons then"+
    " John is the winner of the first trick then" +
    " John sings Trick then" +
    " Mark accepts the Trick then" +
    " John plays the Three of Cups then" +
    " Mark plays the As of Spades then" +
    " Mark is the winner of the second trick then" +
    " Mark plays the Seven of Batons then" +
    " John plays the Four of Batons then" +
    " Mark wins the deal where there's only the Trick Bet", () => {

        let john = new Player("John");
        let mark = new Player("Mark");

        let deal = new Deal();

        john.pickup(new AsOfBatons(), new ThreeOfCups(), new FourOfBatons());
        mark.pickup(new ThreeOfSpades(), new AsOfSpades(), new SevenOfBatons());

        deal = mark.play(new ThreeOfSpades(), deal);
        deal = john.play(new AsOfBatons(), deal);

        deal = john.sings(new TrickBet(), deal);
        deal = mark.accepts(deal);

        deal = john.play(new ThreeOfCups(), deal);
        deal = mark.play(new AsOfSpades(), deal);

        deal = mark.play(new SevenOfBatons(), deal);
        deal = john.play(new FourOfBatons(), deal);

        expect(deal.getPoints().isEqual(new Point(mark, new TrickBet()))).to.be.true;
    });

});
