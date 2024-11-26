import Gameboard from "./gameboard";

class Player {
    constructor() {
        this.board = new Gameboard
    }
}

class ComputerPlayer extends Player {}

export { Player, ComputerPlayer }