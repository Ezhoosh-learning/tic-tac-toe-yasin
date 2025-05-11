function resetBoard(setSquares) {
    setSquares((squares) => {
        const numSquares = squares.length;

        return Array(numSquares).fill(Array(numSquares).fill(''));
    });
}

export { resetBoard };
