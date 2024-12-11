// Backend: server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Hardcoded credentials for demo (poor practice)
const validUsername = "admin";
const validPassword = "password123"; // Weak password

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === validUsername && password === validPassword) {
        res.json({ message: 'Authentication successful!' });
    } else {
        res.status(401).json({ message: 'Authentication failed.' });
    }
});