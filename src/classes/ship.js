export default class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.timesHit = 0
    }

    hit() {
        this.timesHit++
    }

    isSunk() {
        return this.length <= this.timesHit
    }
}