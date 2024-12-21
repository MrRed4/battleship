import Ship from "./ship"

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
        this.discovered = []
        this.placed = []
    }

    placeShip(name, x, y) {
        let ship = this.getShip(name)
        if (x > this.board.length || x < 0 || y > this.board.length || y < 0 || y + 1 - ship.length < 0) {
            throw new Error(`Ship must be placed within bounds: ${ship.name}, X: ${x}, Y: ${y}`)
        }
        if (!this.board[x][y]) {
            let length = ship.length
            for (let i = y; length > 0; i--, length--) {
                this.board[x][i] = ship
            }
            this.placed.push(ship)
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] instanceof Ship) {
            this.board[x][y].hit()
        } else {
            this.missed++
        }
        this.discovered.push([x, y])
    }

    isDiscovered(x, y) {
        return this.discovered.some(coord => coord[0] == x && coord[1] == y)
    }

    docks = [
        new Ship("Carrier", 5),
        new Ship("Battleship", 4),
        new Ship("Destroyer", 3),
        new Ship("Submarine", 3),
        new Ship("Patrol-Boat", 2)
    ]

    getShip(name) {
        return this.docks.filter(ship => ship.name.toLowerCase() === name.toLowerCase())[0]
    }
}