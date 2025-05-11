import Notify from '../Notify';

function Result({ result, turn }) {
    return (
        <div className="result">
            <h2>Game Result</h2>
            <Notify type="X">{result.x}</Notify>
            <Notify type="O">{result.o}</Notify>
            <Notify type="Tie">{result.tie}</Notify>
            <Notify type="Current Player">{turn}</Notify>
        </div>
    );
}

export default Result;
