import Gameboard from "./gameboard";

class Player {
    constructor(name = 'Player 1') {
        this.board = new Gameboard
        this.name = name
    }

    get field() {
        return this.board.board
    }
}

class ComputerPlayer extends Player {
    constructor(name = 'Computer') {
        super()
        this.name = name
    }

    #randomNum() {
        return Math.floor(Math.random() * 10)
    }

    randomAttack(opponent) {
        let randomX = this.#randomNum()
        let randomY = this.#randomNum()
        if (opponent.board.isDiscovered(randomX, randomY)) {
            return this.randomAttack(opponent)
        }
        opponent.board.receiveAttack(randomX, randomY)
    }

    randomBoard() {
        this.board.docks.forEach(ship => {
            if (this.board.placed.includes(ship)) return
            let randomY = Math.floor(Math.random() * (9 - ship.length) + ship.length)
            let randomX = this.#randomNum()
            this.board.placeShip(ship.name, randomX, randomY)
        })
        if (this.board.placed.length != 5) {
            this.randomBoard()
        }
    }
}

export { Player, ComputerPlayer }