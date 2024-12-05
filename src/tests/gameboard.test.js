import Gameboard from "../classes/gameboard";
import Ship from "../classes/ship";

const gameboard = new Gameboard
gameboard.placeShip('Destroyer', 3, 3)


test('Ship is placed on specific coordinate', () => {
    expect(gameboard.board[3][3]).toBeInstanceOf(Ship)
})

test('Ship placed is correct', () => {
    expect(gameboard.board[3][3].name).toBe('Destroyer')
})

test('Ship spans its length', () => {
    expect(gameboard.board[3][3]).toBeInstanceOf(Ship)
    expect(gameboard.board[3][2]).toBeInstanceOf(Ship)
    expect(gameboard.board[3][1]).toBeInstanceOf(Ship)
    expect(gameboard.board[3][0]).not.toBeInstanceOf(Ship)
})

test('Ship can not be placed out of bounds', () => {
    expect(() => gameboard.placeShip('Submarine', 100, 100)).toThrow(Error)
})

test('Ship will not be placed if length is out of bounds', () => {
    expect(() => gameboard.placeShip('Carrier', 1, 3)).toThrow(Error)
})

test('Ship can not be placed on an occupied space', () => {
    expect(gameboard.placeShip('Patrol Boat', 3, 2)).toBeUndefined()
})