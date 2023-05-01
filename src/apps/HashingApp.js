import React, { useState } from "react";
import sha256 from "crypto-js/sha256";

function HashingApp() {
    const [input, setInput] = useState("");
    const [hash, setHash] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleHash = () => {
        const hashedInput = sha256(input).toString();
        setHash(hashedInput);
    };

    return (
        <div>
            <label htmlFor="input">Enter text to hash:</label>
            <input type="text" id="input" onChange={handleInput} />
            <button onClick={handleHash}>Hash</button>
            {hash && <p>Hashed result: {hash}</p>}
        </div>
    );
}

export default HashingApp;