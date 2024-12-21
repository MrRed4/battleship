import { Player, ComputerPlayer } from "./classes/player";

const user = new Player
const computer = new ComputerPlayer

user.board.placeShip("Carrier", 5, 6)
user.board.placeShip("Battleship", 9, 9)
user.board.placeShip("Destroyer", 8, 5)
user.board.placeShip("Submarine", 9, 3)
user.board.placeShip("Patrol-Boat", 0, 1)

// computer.board.placeShip("Carrier", 1, 7)
// computer.board.placeShip("Battleship", 4, 5)
// computer.board.placeShip("Destroyer", 2, 2)
// computer.board.placeShip("Submarine", 8, 5)
// computer.board.placeShip("Patrol-Boat", 0, 9)

computer.randomBoard()

function getWinner() {
    let computerSunk = computer.board.placed.filter(ship => ship.isSunk())
    let playerSunk = user.board.placed.filter(ship => ship.isSunk())
    if (computerSunk.length === 5) {
        return user
    }
    if (playerSunk.length === 5) {
        return computer
    }
}

export { user, computer, getWinner }