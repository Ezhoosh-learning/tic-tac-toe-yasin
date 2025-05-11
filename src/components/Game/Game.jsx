import { useEffect, useState } from 'react';

import { useTurn } from '../../hooks/useTurn';

import Result from './Result';
import Board from './Board';

import { calculateWin, checkSquareSpace } from '../../helpers/calculate';
import { resetBoard } from '../../helpers/game';

function Game({ squares, setSquares }) {
    const [turn, setTurn] = useTurn();
    const [result, setResult] = useState({ x: 0, o: 0, tie: 0 });

    useEffect(() => {
        const winner = calculateWin(squares, turn === 'X' ? 'O' : 'X');

        if (winner) {
            const player = winner.toLowerCase();
            setResult((result) => ({ ...result, [player]: result[player] + 1 }));
            resetBoard(setSquares);
        } else {
            const hasSquare = checkSquareSpace(squares);

            if (!hasSquare) {
                setResult((result) => ({ ...result, tie: result.tie + 1 }));
                resetBoard(setSquares);
            }
        }
    }, [squares, turn]);

    function checkSquareHandler(rowId, cellId, symbol) {
        const square = squares[rowId][cellId];
        if (square !== '') return;

        setSquares((squares) => {
            squares[rowId][cellId] = symbol;
        });

        setTurn((turn) => (turn === 'X' ? 'O' : 'X'));
    }

    return (
        <div className="game">
            <Result result={result} turn={turn} />
            <Board squares={squares} turn={turn} checkSquareHandler={checkSquareHandler} />
        </div>
    );
}

export default Game;
