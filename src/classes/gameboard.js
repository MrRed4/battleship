import Ship from "./ship"

const ships = [
    new Ship("Carrier", 5),
    new Ship("Battleship", 4),
    new Ship("Destroyer", 3),
    new Ship("Submarine", 3),
    new Ship("Patrol Boat", 2)
];

function getShip(name) {
    return ships.filter(ship => ship.name.toLowerCase() === name.toLowerCase())[0]
}

function create2dArray(rows, columns = rows) {
    let board = []
    for (let i = 0; i < rows; i++) {
        board[i] = []
        for (let c = 0; c < columns; c++) {
            board[i][c] = ""
        }
    }
    return board
}

export default class Gameboard {
    constructor() {
        this.board = create2dArray(10)
        this.missed = 0
        this.discoveredPositions = []
    }

    placeShip(name, x, y) {
        let ship = getShip(name)
        if (x > this.board.length || x < 0 || y > this.board.length || y < 0 || y - ship.length < 0) {
            throw new Error('Ship must be placed within bounds')
        }
        if (!this.board[x][y]) {
            for (let i = y; ship.length > 0; i--, ship.length--) {
                this.board[x][i] = ship
            }
        } else {
            return
        }
    }

    receiveAttack(x, y) {
        if (typeof this.board[x][y] === 'object') {
            this.board[x][y].hit()
        } else {
            this.missed++
        }
        this.discoveredPositions.push([x, y])
    }
}