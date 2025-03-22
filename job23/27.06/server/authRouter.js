const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const dev = require('./devmodel');

// Registration Route
router.post('/register1', async (req, res) => {
  try {
    const { fullname, email, mobile, skill, password, confirmpassword } = req.body;

    // Check if passwords match
    if (password !== confirmpassword) {
      return res.status(400).json({ msg: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await dev.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new dev({
      fullname,
      email,
      mobile,
      skill,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
