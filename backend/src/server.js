// Backend: server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use environment variables for username and password
const validUsername = process.env.ADMIN_USERNAME || 'defaultAdmin';
const hashedPassword = process.env.HASHED_PASSWORD || bcrypt.hashSync('defaultPassword123', 10);

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === validUsername && bcrypt.compareSync(password, hashedPassword)) {
        res.json({ message: 'Authentication successful!' });
    } else {
        res.status(401).json({ message: 'Authentication failed.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
