import { expect } from 'chai';

import Player from '../../main/Player';

import AsOfBatons from '../../main/cards/AsOfBatons';
import TwoOfBatons from '../../main/cards/TwoOfBatons';
import TenOfCups from '../../main/cards/TenOfCups';

import TwoOfCups from '../../main/cards/TwoOfCups';
import ThreeOfCups from '../../main/cards/ThreeOfCups';
import AsOfSpades from '../../main/cards/AsOfSpades';

describe('Trick tests - ', () => {

    it.only("lala", () => {
        let mark = new Player("Mark");
        mark.pickup(new AsOfBatons(), new TwoOfBatons(), new TenOfCups());

        expect(mark.envidoPoints()).to.be.equals(23);
    });

    it("lala2", () => {
        let john = new Player("John");
        john.pickup(new TwoOfCups(), new ThreeOfCups(), new AsOfSpades());

        expect(john.envidoPoints()).to.be.equals(25);
    });

});