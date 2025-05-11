import { useState } from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import Game from '../components/Game/Game';

function Home() {
    const [squars, setSquares] = useState(null);

    return (
        <div className="container">
            <Header squares={squars} setSquares={setSquares} />
            {squars ? <Game squares={squars} setSquares={setSquares} /> : <Form setSquares={setSquares} />}
        </div>
    );
}

export default Home;
