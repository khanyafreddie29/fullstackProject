// models/contactModel.js
const db = require('../config/db');

const AddContactMessage = async ({
  user_id,
  first_name,
  last_name,
  company,
  email,
  phone_country,
  phone_number,
  message
}) => {
  const result = await db.query(
    `INSERT INTO contact_messages 
     (user_id, first_name, last_name, company, email, phone_country, phone_number, message) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [user_id, first_name, last_name, company, email, phone_country, phone_number, message]
  );

  return result;
};

module.exports = {
  AddContactMessage
};
