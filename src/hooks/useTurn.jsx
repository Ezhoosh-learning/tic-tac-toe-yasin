import { useEffect, useState } from 'react';

function useTurn() {
    const [turn, setTurn] = useState(null);

    useEffect(() => {
        const randomPlayer = Math.random() > 0.5 ? 'X' : 'O';

        setTurn(randomPlayer);
    }, []);

    return [turn, setTurn];
}

export { useTurn };
