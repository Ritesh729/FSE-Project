const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'electrocart_secret';

exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username, email, password: hashedPassword, role
    });

    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    console.error('Signup error:', err); // 👈 Add this line
    res.status(500).json({ error: 'Signup failed', details: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
  console.log(req.body);
    
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err });
  }
};
