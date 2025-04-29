
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); 
const { User } = require('../models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    if (user.role !== 'admin') return res.status(403).json({ error: 'Not authorized as admin' });

    res.status(200).json({ message: 'Admin login successful', user });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;