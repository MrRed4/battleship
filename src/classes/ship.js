export default class Ship {
    constructor(name, len) {
        this.name = name
        this.length = len
        this.timesHit = 0
        this.placed = false
    }

    hit() {
        this.timesHit++
    }

    isSunk() {
        return this.length >= this.timesHit
    }
}