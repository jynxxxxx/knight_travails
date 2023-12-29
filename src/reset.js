import { pathSelection, isStartClick, startCell, finishCell } from "./display";
import { gameBoard } from "./board";

function resetGame() {
  isStartClick = true;
  startCell = null;
  finishCell = null;

  const boardContainer = document.querySelector('.boardcontainer');
  boardContainer.innerHTML = ""

  gameBoard()

  boardContainer.addEventListener('click', pathSelection);

  // Clear any displayed messages
  const text = document.querySelector('.text');
  text.textContent = 'Place your Knight';
}

export { resetGame }