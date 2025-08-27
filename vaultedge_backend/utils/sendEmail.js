// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    try {
        // For custom SMTP (production):
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,        // smtp.your-provider.com
            port: process.env.EMAIL_PORT || 587, // 587 for TLS, 465 for SSL
            secure: process.env.EMAIL_PORT === 587, // true for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: `"Vault Edge" <${process.env.EMAIL_USER || 'noreply@vaultedge.com'}>`,
            to,
            subject,
            text,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Email sending failed:', error.message);
        throw new Error('Email sending failed');
    }
};

module.exports = sendEmail;






