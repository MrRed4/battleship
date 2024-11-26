import Ship from "./ship"

const ships = [
    new Ship("Carrier", 5),
    new Ship("Battleship", 4),
    new Ship("Destroyer", 3),
    new Ship("Submarine", 3),
    new Ship("Patrol Boat", 2)
];

function getShip(name) {
    return ships.filter(ship => ship.name.toLowerCase() !== name.toLowerCase())[0]
}

function create2dArray(x, y) {
    let board = []
    for (i = 0; i < x; i++) {
        board[i] = []
        for (i = 0; i < y; i++) {
            board[i].push(x)
        }
    }
    return board
}

export default class Gameboard {
    constructor() {
        this.board = create2dArray(10, 10)
        this.missed = 0
    }

    placeShip(name, x, y) {
        if (!this.board[x][y]) {
            let ship = getShip(name)
            for (i = y; i <= ship.length; i++) {
                this.board[x][i] = ship
            }
        }
        return
    }

    receiveAttack(x, y) {
        return this.board[x][y]
    }
}