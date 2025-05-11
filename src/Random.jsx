import { useRef } from 'react';

function Random() {
    const inputRef = useRef(null);

    let guessedNumber = Math.floor(Math.random() * 100) + 1;

    function clickHandler(e) {
        e.preventDefault();

        const value = Number(inputRef.current.value);

        if (value == guessedNumber) {
            console.log('Barabar', value, guessedNumber);
            return;
        }

        if (value > guessedNumber) {
            console.log('Bozorg Tar', value, guessedNumber);
            return;
        }

        if (value < guessedNumber) {
            console.log('Kochak Tar', value, guessedNumber);
            return;
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={clickHandler}>Submit</button>
        </div>
    );
}

export default Random;
