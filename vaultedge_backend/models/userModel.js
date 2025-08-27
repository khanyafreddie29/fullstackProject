const db = require('../config/db');

exports.createUser = async (name, email, phone_number, hashedPassword) => {
    const [result] = await db.execute(
        'INSERT INTO users (name, email, phone_number, password) VALUES (?, ?, ?, ?)',
        [name, email, phone_number, hashedPassword]
    );
    return result.insertId;
};

exports.getUserByEmail = async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};


