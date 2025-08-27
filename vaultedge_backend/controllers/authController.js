const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool  = require('../config/db.js'); //how do i update this according without using { pool }
const sendEmail  = require('../utils/sendEmail');

// Helper function to create JWT
const generateTokenCon = (user_id) => {
    return jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Forgot Password
const forgotPasswordCon = async (req, res) => {
    const { email } = req.body;
    try {
        const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (user.length === 0) {
            return res.status(404).json({ message: "No user found with this email address" });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString("hex");
        const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

        // Save token to database
        await pool.query(
            "UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?",
            [resetToken, resetTokenExpiry, email]
        );

        // Create reset URL
        const resetUrl = `http://localhost:8080/reset-password/${resetToken}`;
        console.log("Password reset URL:", resetUrl);

        const emailText = `
Hi there,
You requested a password reset for your Vault Edge account.
Click the link below to reset your password:
${resetUrl}
This link will expire in 15 minutes.
If you didn't request this, please ignore this email.
Best regards,
Vault Edge Team
        `;

        await sendEmail(email, "Password Reset Request", emailText);

        res.json({
            message: "Password reset link sent to your email",
            resetToken 
        });
    } catch (error) {
        console.error("Forgot password error:", error);
        res.status(500).json({ error: "Failed to process password reset request" });
    }
};

// Reset Password
const resetPasswordCon = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        // Find user with valid token
        const [user] = await pool.query(
            "SELECT * FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()",
            [token]
        );

        if (user.length === 0) {
            return res.status(400).json({ msg: "Invalid or expired reset token" });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Update password and clear reset token
        await pool.query(
            "UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE reset_token = ?",
            [hashedPassword, token]
        );

        res.json({ message: "Password has been reset successfully" });
    } catch (error) {
        console.error("Reset password error:", error);
        res.status(500).json({ error: "Failed to reset password" });
    }
};

// Get current user (protected route)
const getCurrentUserCon = async (req, res) => {
    try {
        const [user] = await pool.query(
            'SELECT user_id, name, email, phone_number FROM users WHERE user_id = ?',
            [req.user.user_id]
        );

        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Export all controllers
module.exports = {
    forgotPasswordCon,
    resetPasswordCon,
    getCurrentUserCon
};