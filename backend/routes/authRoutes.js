const express = require('express');
const router = express.Router();

const { registerUser } = require('../controller/authController');

// Route to register a new user
router.post('/register', registerUser);

module.exports = router;