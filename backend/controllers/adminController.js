

const bcrypt = require('bcrypt'); 
const { User, Review } = require('../models');

exports.addAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  console.log('📥 Received Add Admin Request:', { username, email });

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.warn('⚠️ Admin already exists with this email');
      return res.status(400).json({ message: 'Admin with this email already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const admin = await User.create({
      username,
      email,
      password: hashed,
      role: 'admin'
    });

    console.log('Admin created successfully:', admin);
    res.status(201).json(admin);
  } catch (err) {
    console.error('Admin add failed:', err);
    res.status(500).json({ message: 'Admin add failed', error: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};
