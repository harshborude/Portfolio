const Contact = require('../models/Contact');
const sendEmail = require('../utils/SendEmail');

const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields are required' });

  try {
    const newContact = await Contact.create({ name, email, message });

    // Send email
    await sendEmail({ name, email, message });

    res.status(200).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    console.error('Error submitting contact:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { submitContact };
