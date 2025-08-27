const contactModel = require('../models/contactModel');

const addContactMessage = async (req, res) => {
  try {
    const user_id = req.user.id;

    const {
      first_name,
      last_name,
      company,
      email,
      phone_country,
      phone_number,
      message
    } = req.body;

    if (!first_name || !email || !message) {
      return res.status(400).json({ error: 'First name, email, and message are required' });
    }

    await contactModel.AddContactMessage({
      user_id,
      first_name,
      last_name,
      company,
      email,
      phone_country,
      phone_number,
      message
    });

    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addContactMessage
};
