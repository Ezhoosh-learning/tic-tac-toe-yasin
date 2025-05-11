function Notify({ type, children }) {
    return (
        <p className="notify">
            <span>{type}: </span>
            {children}
        </p>
    );
}

export default Notify;
