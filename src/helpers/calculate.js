function calculateWin(squares, player) {
    if (calcHorizontal(squares, player)) return player;
    if (calcVertical(squares, player)) return player;
    if (calcDiagonal(squares, player)) return player;

    return false;
}

function checkSquareSpace(squares) {
    const hasSquareSpace = squares.flat().some((cell) => cell === '');

    return hasSquareSpace;
}

function calcHorizontal(squares, player) {
    return squares.some((row) => row.every((cell) => cell === player));
}

function calcVertical(squares, player) {
    return squares[0].some((value, cell) => squares.every((row) => row[cell] === player));
}

function calcDiagonal(squares, player) {
    const squaresLength = squares.length;

    return (
        squares.every((row, cell) => row[cell] === player) ||
        squares.every((row, cell) => row[squaresLength - 1 - cell] === player)
    );
}

export { calculateWin, checkSquareSpace };
