// Create the starting game board
function gameBoard() {
    const startLocation = [0, 0]
    const boardContainer = document.querySelector('.boardcontainer');

    // Create board
    for (let i = 0; i < 8; i++) {
        let row = document.createElement('div');

        for (let y = 0; y < 8; y++) {
            let cell = document.createElement('div');
            if (i % 2 === 0)
                y % 2 === 0 ? cell.classList.add('white') : cell.classList.add('black');
            else
                y % 2 === 0 ? cell.classList.add('black') : cell.classList.add('white');

            cell.classList.add('cell');

            // Set custom data attributes to store the cell's position on the board
            cell.dataset.row = i;
            cell.dataset.column = y;
            cell.dataset.x = i;
            cell.dataset.y = y;

            row.appendChild(cell);
        }

        row.classList.add('row');

        boardContainer.appendChild(row);
    }

    // Create and place knight
    let cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        const cellRow = parseInt(cell.dataset.row, 10);
        const cellColumn = parseInt(cell.dataset.column, 10);

        if (startLocation[0] === cellRow && startLocation[1] === cellColumn) {
            const knight = document.createElement('img');
            knight.src = './images/knight.png';
            knight.classList.add('knight');

            cell.appendChild(knight);
        }
    });

}

export { gameBoard }