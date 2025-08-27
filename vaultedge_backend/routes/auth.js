const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // adjust path as needed

// Route to send reset link
router.post('/forgot-password', authController.forgotPasswordCon);

// Route to reset password using token
router.post('/reset-password/:token', authController.resetPasswordCon);

module.exports = router;