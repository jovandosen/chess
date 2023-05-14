var chessMainContainer = document.getElementById("chess-game-main-container");

var blockStartingId = 0;

function createBoardBlock(color) {
    var block = document.createElement("div");

    blockStartingId += 1;
    block.setAttribute("id", blockStartingId + "-block");
    block.classList.add("board-block");

    block.style.backgroundImage = "url('images/king-light.png')";

    if(color == "green") {
        block.style.backgroundColor = color;
        block.style.backgroundImage = "url('images/king-dark.png')";
    }

    chessMainContainer.appendChild(block);

    return block;
}

function createChessBoard() {

    var top = 0;
    var left = 0;
    var blockEl;
    var colorOne;
    var colorTwo;

    for(var i = 1; i <= 8; i++) {

        if(i % 2 == 0) {
            colorOne = "green";
            colorTwo = "white";
        } else {
            colorOne = "white";
            colorTwo = "green";
        }

        for(var j = 1; j <= 8; j++) {

            if(j % 2 == 0) {
                blockEl = createBoardBlock(colorTwo);
            } else {
                blockEl = createBoardBlock(colorOne);
            }

            blockEl.style.top = top + "px";
            blockEl.style.left = left + "px";

            top += 100;

            if(j == 8) {
                top = 0;
                left += 100;
            }

        }

    }

}

createChessBoard();