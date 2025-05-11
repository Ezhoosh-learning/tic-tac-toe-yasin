import Square from './Square';

function Board({ squares, turn, checkSquareHandler }) {
    const squaresLength = squares.length;

    const boardStyle = {
        gridTemplateColumns: `repeat(${squaresLength}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${squaresLength}, minmax(0, 1fr))`,
    };

    return (
        <div className="board">
            <div className="board-content" style={boardStyle}>
                {squares.map((row, rowId) =>
                    row.map((value, cellId) => (
                        <Square
                            key={`${rowId}-${cellId}`}
                            squares={squaresLength}
                            row={rowId}
                            cell={cellId}
                            turn={turn}
                            value={value}
                            checkSquareHandler={checkSquareHandler}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Board;
