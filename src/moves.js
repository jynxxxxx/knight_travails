
const boardCoords = new Map()

//possible moves
const dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ]
const dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ]

function cellCoords (x,y) {
    const xCoord = x;
    const yCoord = y;

    function possibleMoves() {
        const moves = []

        for (let i = 0; i < dx.length; i++) {
            const newX = xCoord + dx[i];
            const newY = yCoord + dy[i];

            // check to see if valid square
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                moves.push(cellCoords(newX, newY));
            }
        }
        return moves;
    };

    return { xCoord, yCoord, possibleMoves };
};

function knightTravails(start, finish) {
    boardCoords.clear();

    const startCell = cellCoords(...start);
    const finishCell = cellCoords(...finish);

    const queue = [startCell];
    const pathCells = [];

    while (queue.length > 0) {
        const currentCell = queue.shift();

        if (currentCell.xCoord === finishCell.xCoord && currentCell.yCoord === finishCell.yCoord) {
            const path = [];
            let current = currentCell;

            while (current) {
                path.unshift([current.xCoord, current.yCoord]); 
                pathCells.push(current);
                current = current.predecessor;
            }
            
            pathCells.shift();
            pathCells.reverse().shift();

            pathCells.forEach((pathCell, index) => {
                const cell = document.querySelector(`[data-row="${pathCell.xCoord}"][data-column="${pathCell.yCoord}"]`);
                cell.classList.add('path');
                cell.textContent = index + 1;
            });

            const end = document.querySelector('.end');
            end.textContent = 'End'

            const text = document.querySelector('.text');
            const pathText = path.map(coord => `[${coord[0]}, ${coord[1]}]`).join(' -> ');


            text.innerHTML = `
            <div class="first"> The shortest path was ${path.length - 1} moves!</div>
            <div class="first"> The moves were: ${pathText} </div>
            `

            console.log(`The shortest path was ${path.length - 1} moves!`);
            console.log("The moves were:");
            console.log(path);
            return;
        }

        const moves = currentCell.possibleMoves();

        for (const move of moves) {
            const position = `${move.xCoord},${move.yCoord}`;
            if (!boardCoords.has(position)) {
                move.predecessor = currentCell;
                queue.push(move);
                boardCoords.set(position, move);
            }
        }
    }

    console.log("No path found.");
}

export { knightTravails }
