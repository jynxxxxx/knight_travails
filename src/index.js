import { gameBoard } from './board.js'
import { pathSelection } from './display.js'
import { resetGame } from './reset.js';

const boardContainer = document.querySelector('.boardcontainer');
const reset = document.querySelector('.reset')

document.addEventListener('DOMContentLoaded', () => {
    gameBoard()
})

boardContainer.addEventListener('click', pathSelection)

reset.addEventListener('click', resetGame);