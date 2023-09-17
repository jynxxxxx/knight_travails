import { knightTravails } from './moves.js'

// Function to remove the knight from its current position
function removeKnight() {
    const knight = document.querySelector('.knight');
    if (knight) {
        knight.parentElement.removeChild(knight);
    }
}

// Function to place the knight in the specified cell
function placeKnight(cell) {
    const knight = document.createElement('img');
    knight.src = './images/knight.png';
    knight.classList.add('knight');

    cell.appendChild(knight);
}

let isStartClick = true;

let startCell = null;
let finishCell = null;

function pathSelection(event) {
    if (event.target.classList.contains('cell')) {
        let cell = event.target;

        if (isStartClick) {
            const cellRow = parseInt(cell.dataset.row, 10);
            const cellColumn = parseInt(cell.dataset.column, 10);

            removeKnight();
            placeKnight(cell);
            cell.classList.add('start');
            startCell = [cellRow, cellColumn];
            isStartClick = false; // Set flag for the second click

            const text = document.querySelector('.text');
            text.textContent = "Choose the Knight's final destination";
        } else {
            const cellRow = parseInt(cell.dataset.row, 10);
            const cellColumn = parseInt(cell.dataset.column, 10);
            finishCell = [cellRow, cellColumn];
            cell.classList.add('end');

            // Remove the event listener after the second click
            const boardContainer = document.querySelector('.boardcontainer');
            boardContainer.removeEventListener('click', pathSelection);
        }
    }
    if (startCell && finishCell) {
        knightTravails(startCell, finishCell);
    }
}

export { pathSelection }


