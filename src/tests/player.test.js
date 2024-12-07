import { Player, ComputerPlayer } from "../classes/player";
import Gameboard from "../classes/gameboard";

const P1 = new Player
const P2 = new ComputerPlayer

test('Players have a gameboard', () => {
    expect(P1.board).toBeInstanceOf(Gameboard)
    expect(P2.board).toBeInstanceOf(Gameboard)
})