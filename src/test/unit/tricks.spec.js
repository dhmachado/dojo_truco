import { expect } from 'chai';

import Player from '../../main/Player';
import Deal from '../../main/Deal';

import AsOfSpades from '../../main/cards/AsOfSpades';
import AsOfBatons from '../../main/cards/AsOfBatons';
import ThreeOfSpades from '../../main/cards/ThreeOfSpades';
import SevenOfBatons from '../../main/cards/SevenOfBatons';
import FourOfCups from '../../main/cards/FourOfCups';
import FourOfBatons from '../../main/cards/FourOfBatons';

describe('Trick tests - ', () => {

    it("John plays the as of spades and then Mark plays the four of batons" + 
        " then John plays the three of spades should not throw an exception since John won the first trick", () => {
        
        let player1 = new Player("John");
        let player2 = new Player("Mark");

        let deal = new Deal();

        player1.pickup(new AsOfSpades(), new ThreeOfSpades(), new FourOfCups());
        player2.pickup(new AsOfBatons(), new FourOfBatons(), new SevenOfBatons());

        deal = player1.play(new AsOfSpades(), deal);
        deal = player2.play(new FourOfBatons(), deal);
        
        expect(() => player1.play(new ThreeOfSpades(), deal)).to.not.throw();
    });

    it("Mark looses the first trick and tries to play a card" + 
        " should throw an exception since John won the first trick", () => {
        
        let player1 = new Player("John");
        let player2 = new Player("Mark");

        let deal = new Deal();

        player1.pickup(new AsOfSpades(), new ThreeOfSpades(), new FourOfCups());
        player2.pickup(new AsOfBatons(), new FourOfBatons(), new SevenOfBatons());

        deal = player1.play(new AsOfSpades(), deal);
        deal = player2.play(new FourOfBatons(), deal);
        
        expect(() => player2.play(new AsOfBatons(), deal)).to.throws();
    });

});