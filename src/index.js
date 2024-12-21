import "./styles.css";
import { user, computer, getWinner } from "./game.js"
import Ship from "./classes/ship";

function renderComputer() {
    document.querySelector('.second').textContent = ''
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let pos = computer.field[x][y]
            let div = document.createElement('div')
            div.addEventListener('click', attackPos)
            div.classList.add('square')
            div.dataset.x = x
            div.dataset.y = y
            if (computer.board.isDiscovered(x, y)) {
                if (pos instanceof Ship) {
                    div.classList.add('ship')
                    
                    if (pos.isSunk()) {
                        div.textContent = '•'
                    }
                } else {
                    div.classList.add('miss')
                }
            }
            document.querySelector('.second').appendChild(div)
        }
    }
}

function renderPlayer() {
    document.querySelector('.first').textContent = ''
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let pos = user.field[x][y]
            let div = document.createElement('div')
            div.classList.add('square')
            div.dataset.x = x
            div.dataset.y = y
            if (pos instanceof Ship) {
                div.classList.add('ship')
                if (pos.isSunk()) {
                    div.textContent = '•'
                }
            } 
            if (user.board.isDiscovered(x, y)) {
                if (pos instanceof Ship) {
                    div.classList.add('ship-hit')
                } else {
                    div.classList.add('miss')
                }
            }
            document.querySelector('.first').appendChild(div)
        }
    }
}

function attackPos(event) {
    let square = event.target
    if (computer.board.isDiscovered(square.dataset.x, square.dataset.y) || getWinner()) return
    computer.board.receiveAttack(square.dataset.x, square.dataset.y)
    computer.randomAttack(user)
    renderBoards()
    renderShipLists()
    if (getWinner()) {
        document.querySelector('.winner').textContent = `${getWinner().name} is the winner!`
        return
    }
}

function renderPlayerShipList() {
    let list = document.querySelectorAll('.list > ul')[0]
    list.textContent = ''
    user.board.docks.forEach(ship => {
        let li = document.createElement('li')
        li.classList.add(ship.name)
        if (user.board.placed.includes(ship)) {
            li.classList.add('placed')
        }
        list.appendChild(li)
        for (let i = 0; i < ship.length; i++) {
            let div = document.createElement('div')
            if (user.board.placed[user.board.placed.indexOf(ship)].isSunk()) {
                div.classList.add('destroyed')
            }
            div.classList.add('dock-ship-square')
            li.appendChild(div)
        }
    })
}

function renderComputerShipList() {
    let list = document.querySelectorAll('.list > ul')[1]
    list.textContent = ''
    computer.board.docks.forEach(ship => {
        let li = document.createElement('li')
        li.classList.add(ship.name)
        if (computer.board.placed.includes(ship)) {
            li.classList.add('placed')
        }
        list.appendChild(li)
        for (let i = 0; i < ship.length; i++) {
            let div = document.createElement('div')
            if (computer.board.placed[computer.board.placed.indexOf(ship)].isSunk()) {
                div.classList.add('destroyed')
            }
            div.classList.add('dock-ship-square')
            li.appendChild(div)
        }
    })
}

function renderShipLists() {
    renderPlayerShipList()
    renderComputerShipList()
}

function renderBoards() {
    renderComputer()
    renderPlayer()
}

renderBoards()
renderShipLists()