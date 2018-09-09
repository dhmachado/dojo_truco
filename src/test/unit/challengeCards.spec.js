import { expect } from 'chai';

import AceOfSpades from '../../main/cards/AceOfSpades';
import AceOfBatons from '../../main/cards/AceOfBatons';
import ThreeOfSpades from '../../main/cards/ThreeOfSpades';
import SevenOfBatons from '../../main/cards/SevenOfBatons';
import FourOfBatons from '../../main/cards/FourOfBatons';
import FourOfCups from '../../main/cards/FourOfCups';

describe('Challenge between cards tests - ', () => {

    it("Ace of Spades vs Four of Batons", () => {
        let aceOfSpades = new AceOfSpades();
        let fourOfBatons = new FourOfBatons();

        expect(aceOfSpades.challenge(fourOfBatons)).to.deep.equal(aceOfSpades);
    });

    it("Three of Spades vs Ace of Batons", () => {
        let threeOfSpades = new ThreeOfSpades();
        let aceOfBatons = new AceOfBatons();

        expect(threeOfSpades.challenge(aceOfBatons)).to.deep.equal(aceOfBatons);
    });

    it("Seven of Batons vs Four of Cups", () => {
        let sevenOfBatons = new SevenOfBatons();
        let fourOfCups = new FourOfCups();
        
        expect(sevenOfBatons.challenge(fourOfCups)).to.deep.equal(sevenOfBatons);
    });

});