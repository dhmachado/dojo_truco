import { expect } from 'chai';

import NoOne from '../../main/NoOne';
import Player from '../../main/Player';

import NoCard from '../../main/cards/NoCard';

import AsOfSpades from '../../main/cards/AsOfSpades';
import AsOfBatons from '../../main/cards/AsOfBatons';
import ThreeOfSpades from '../../main/cards/ThreeOfSpades';
import SevenOfBatons from '../../main/cards/SevenOfBatons';
import FourOfCups from '../../main/cards/FourOfCups';
import FourOfBatons from '../../main/cards/FourOfBatons';
import ThreeOfCups from "../../main/cards/ThreeOfCups";

describe('Card challenges - ', () => {

    it("john's no card vs mark's as of spades the winner is no one", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let noCard = new NoCard();
        let asOfSpades = new AsOfSpades();

        expect(noCard.challenge(john, asOfSpades, mark)).to.deep.equal(new NoOne());
    });

    it("John's as of spades vs Mark's four of batons the winner is john", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let asOfSpades = new AsOfSpades();
        let fourOfBatons = new FourOfBatons();

        expect(asOfSpades.challenge(john, fourOfBatons, mark)).to.deep.equal(john);
    });

    it("John's no card vs Mark's three of spades the winner is no one", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let noCard = new NoCard();
        let threeOfSpades = new ThreeOfSpades();

        expect(noCard.challenge(john, threeOfSpades, mark)).to.deep.equal(new NoOne());
    });

    it("John's three of spades vs Mark's as of batons the winner is mark", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let threeOfSpades = new ThreeOfSpades();
        let asOfBatons = new AsOfBatons();

        expect(threeOfSpades.challenge(john, asOfBatons, mark)).to.deep.equal(mark);
    });

    it("John's no card vs Mark's seven of batons the winner is no one", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let noCard = new NoCard();
        let sevenOfBatons = new SevenOfBatons();

        expect(noCard.challenge(john, sevenOfBatons, mark)).to.deep.equal(new NoOne());
    });

    it("John's three of spades vs Mark's as of batons the winner is john", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let sevenOfBatons = new SevenOfBatons();
        let fourOfCups = new FourOfCups();

        expect(sevenOfBatons.challenge(john, fourOfCups, mark)).to.deep.equal(john);
    });

    it("John's three of spades vs Mark's as of batons the winner is john", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let sevenOfBatons = new SevenOfBatons();
        let fourOfBatons = new FourOfBatons();

        expect(sevenOfBatons.challenge(john, fourOfBatons, mark)).to.deep.equal(john);
    });

    it("John's no card vs Mark's three of cups the winner is no one", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let noCard = new NoCard();
        let threeOfCups = new ThreeOfCups();

        expect(noCard.challenge(john, threeOfCups, mark)).to.deep.equal(new NoOne());
    });

    it("John's three of cups vs Mark's as of spades the winner is mark", () => {
        let john = new Player("John");
        let mark = new Player("Mark");

        let threeOfCups = new ThreeOfCups();
        let asOfSpades = new AsOfSpades();

        expect(threeOfCups.challenge(john, asOfSpades, mark)).to.deep.equal(mark);
    });

});