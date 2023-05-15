var chessMainContainer = document.getElementById("chess-game-main-container");

var blockStartingId = 0;

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var numbers = [8, 7, 6, 5, 4, 3, 2, 1];

function createBoardBlock(color, x, y) {
    blockStartingId += 1;

    var fieldX = letters[x - 1];
    var fieldY = numbers[y - 1];

    var block = document.createElement("div");

    block.setAttribute("id", blockStartingId + "-block");

    block.classList.add("board-block");
    block.classList.add(fieldY + "-" + fieldX);

    block.addEventListener("drop", function() {
        drop(event);
    });

    block.addEventListener("dragover", function() {
        allowDrop(event);
    });

    if(color == "#bf8040") {
        block.style.backgroundColor = color;
    }

    if(y == 1 || y == 2 || y == 7 || y == 8) {

        var img = document.createElement("img");

        img.setAttribute("id", blockStartingId + "-img");
        img.setAttribute("draggable", true);

        img.addEventListener("dragstart", function() {
            drag(event);
        });

        block.appendChild(img);

        if(y == 2) {
            img.src = "images/pawn-dark.png";
            setFigureTypeAndColor(img, "pawn", "dark");
        }

        if(y == 7) {
            img.src = "images/pawn-light.png";
            setFigureTypeAndColor(img, "pawn", "light");
        }

        if(block.classList.contains("8-a") || block.classList.contains("8-h")) {
            img.src = "images/rook-dark.png";
            setFigureTypeAndColor(img, "rook", "dark");
        }

        if(block.classList.contains("8-b") || block.classList.contains("8-g")) {
            img.src = "images/knight-dark.png";
            setFigureTypeAndColor(img, "knight", "dark");
        }

        if(block.classList.contains("8-c") || block.classList.contains("8-f")) {
            img.src = "images/bishop-dark.png";
            setFigureTypeAndColor(img, "bishop", "dark");
        }

        if(block.classList.contains("8-d")) {
            img.src = "images/queen-dark.png";
            setFigureTypeAndColor(img, "queen", "dark");
        }

        if(block.classList.contains("8-e")) {
            img.src = "images/king-dark.png";
            setFigureTypeAndColor(img, "king", "dark");
        }

        if(block.classList.contains("1-a") || block.classList.contains("1-h")) {
            img.src = "images/rook-light.png";
            setFigureTypeAndColor(img, "rook", "light");
        }

        if(block.classList.contains("1-b") || block.classList.contains("1-g")) {
            img.src = "images/knight-light.png";
            setFigureTypeAndColor(img, "knight", "light");
        }

        if(block.classList.contains("1-c") || block.classList.contains("1-f")) {
            img.src = "images/bishop-light.png";
            setFigureTypeAndColor(img, "bishop", "light");
        }

        if(block.classList.contains("1-d")) {
            img.src = "images/queen-light.png";
            setFigureTypeAndColor(img, "queen", "light");
        }

        if(block.classList.contains("1-e")) {
            img.src = "images/king-light.png";
            setFigureTypeAndColor(img, "king", "light");
        }

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

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    handleFigureAction(ev);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function setFigureTypeAndColor(img, type, color) {
    img.setAttribute("figure-type", type);
    img.setAttribute("figure-color", color);
}

function handleFigureAction(el) {
    var figureId = el.target.getAttribute("id");
    var figureType = el.target.getAttribute("figure-type");
    var figureColor = el.target.getAttribute("figure-color");

    console.log(figureId);
    console.log(figureType);
    console.log(figureColor);
}