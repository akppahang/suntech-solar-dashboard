// Frontend: App.js
import React, { useState } from 'react';
import './styles/App.css';

function App() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        // Input validation
        if (!input || /<script.*?>.*?<\/script>/i.test(input)) {
            alert("Invalid input. Please avoid using scripts.");
            return;
        }
        console.log("User input: " + input);
        alert("Input submitted: " + input);
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