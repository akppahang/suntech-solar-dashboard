const express = require('express');
const router = express.Router();

// Sample API route
router.get('/data', (req, res) => {
    res.json({ message: 'Data fetched successfully!' });
});

module.exports = router;