class Point {

    constructor(winner, betWon) {
        this.winner = winner;
        this.betWon = betWon;
    }

    isEqual(otherPoints) {
        return this.winner.isEqual(otherPoints.winner) && this.betWon.isEqual(otherPoints.betWon);
    }

}

export default Point;
