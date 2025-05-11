import { useRef, useState } from 'react';

import Notify from './Notify';

function Form({ setSquares }) {
    const inputRef = useRef(null);
    const [error, setError] = useState(null);

    function clickHandler(e) {
        e.preventDefault();

        const numSquares = Number(inputRef.current.value);

        if (numSquares >= 3 && numSquares <= 10) {
            setError(null);

            setSquares(Array(numSquares).fill(Array(numSquares).fill('')));
        } else {
            setError('Number of squares must between 3 to 10.');
        }
    }

    return (
        <div className="form-content">
            <form className="form">
                <p>How many squares are there?</p>
                <Notify type="Note">The winner must put them together in the same number of squares.</Notify>
                <Notify type="Note">Number of squares must between 3 to 10.</Notify>
                <div className="form-controller">
                    <input ref={inputRef} type="text" />
                    <button onClick={clickHandler}>Start game!</button>
                </div>
            </form>
            {error && <Notify type="Error">{error}</Notify>}
        </div>
    );
}

export default Form;
