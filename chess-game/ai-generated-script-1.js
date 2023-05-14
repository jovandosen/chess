const chessMainContainer = document.getElementById("chess-game-main-container");
const blockStartingId = 0;
const blockColors = ["white", "green"];

function createChessBoard() {
  let top = 0;
  let left = 0;

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      const block = document.createElement("div");
      const blockId = `${(i - 1) * 8 + j}-block`;
      const color = blockColors[(i + j) % 2];

      block.setAttribute("id", blockId);
      block.classList.add("board-block");
      block.style.top = `${top}px`;
      block.style.left = `${left}px`;
      block.style.backgroundColor = color;
      block.style.backgroundImage = `url('images/king-${color === "white" ? "light" : "dark"}.png')`;

      chessMainContainer.appendChild(block);

      top += 100;

      if (j === 8) {
        top = 0;
        left += 100;
      }
    }
  }
}

createChessBoard();