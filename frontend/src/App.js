// Frontend: App.js
import React, { useState } from 'react';
import './styles/App.css';

function App() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        // No input validation: directly using user input
        console.log("User input: " + input);
        alert("Input submitted: " + input); // Vulnerable to XSS
    };

    return (
        <div className="App">
            <h1>Welcome to the Suntech Solar Dashboard</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;