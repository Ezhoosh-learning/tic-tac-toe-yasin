import { resetBoard } from '../helpers/game';
import Left from './Icon/Left';

function Header({ squares, setSquares }) {
    function backHandler(e) {
        e.preventDefault();
        setSquares(null);
    }

    function resetHandler(e) {
        e.preventDefault();
        resetBoard(setSquares);
    }

    return (
        <header className="header">
            {squares && (
                <button onClick={backHandler}>
                    <Left />
                </button>
            )}
            <h1>Tic Tac Toe Game</h1>
            {squares && (
                <button className="reset-btn" onClick={resetHandler}>
                    Reset
                </button>
            )}
        </header>
    );
}

export default Header;
