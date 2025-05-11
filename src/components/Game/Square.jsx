function Square({ squares, row, cell, turn, value, checkSquareHandler }) {
    function clickHandler(e) {
        e.preventDefault();
        checkSquareHandler(row, cell, turn);
    }

    const isLastRow = row === squares - 1;
    const isLastColumn = cell === squares - 1;

    const componentStyle = {
        borderBottom: isLastRow ? '0' : '0.4rem solid #f8f9fa',
        borderRight: isLastColumn ? '0' : '0.4rem solid #f8f9fa',
    };

    return (
        <div className="square" style={componentStyle} onClick={clickHandler}>
            {value}
        </div>
    );
}

export default Square;
