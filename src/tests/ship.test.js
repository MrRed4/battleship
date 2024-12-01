import Ship from "../classes/ship"

const battleship = new Ship("Battleship", 4)

test('Ship returns correct hit amount', () => {
    battleship.hit()
    expect(battleship.timesHit).toBe(1)
}) 

test('Ship gets sank if hit the same amount as its length', () => {
    battleship.hit()
    battleship.hit()
    battleship.hit()
    expect(battleship.isSunk()).toBe(true)
})