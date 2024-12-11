// Backend: server.js
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Secure practice: Use environment variables for credentials
const validUsername = process.env.VALID_USERNAME;
const validPassword = process.env.VALID_PASSWORD;

// Sample route
app.get('/api/status', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Secure login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!validUsername || !validPassword) {
        console.error('Environment variables for credentials are not set.');
        return res.status(500).json({ message: 'Internal server error.' });
    }

    if (username === validUsername && password === validPassword) {
        res.json({ message: 'Authentication successful!' });
    } else {
        res.status(401).json({ message: 'Authentication failed.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});