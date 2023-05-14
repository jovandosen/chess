var chessMainContainer = document.getElementById("chess-game-main-container");

var blockStartingId = 0;

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var numbers = [8, 7, 6, 5, 4, 3, 2, 1];

function createBoardBlock(color, x, y) {
    blockStartingId += 1;

    var block = document.createElement("div");
    block.setAttribute("id", blockStartingId + "-block");
    block.classList.add("board-block");
    block.classList.add(numbers[y - 1] + "-" + letters[x - 1]);

    var img = document.createElement("img");
    img.setAttribute("id", blockStartingId + "-img");
    block.appendChild(img);

    img.src = "images/king-light.png";

    if(color == "#bf8040") {
        block.style.backgroundColor = color;
        img.src = "images/king-dark.png";
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
            colorOne = "#bf8040";
            colorTwo = "white";
        } else {
            colorOne = "white";
            colorTwo = "#bf8040";
        }

        for(var j = 1; j <= 8; j++) {

            if(j % 2 == 0) {
                blockEl = createBoardBlock(colorTwo, i, j);
            } else {
                blockEl = createBoardBlock(colorOne, i, j);
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