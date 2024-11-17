const User = require('../models/user');
const bcrypt = require('bcrypt');

// Registration
exports.register = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    const newUser = new User({ username, password, firstName, lastName });
    await newUser.save();
    res.redirect('/auth/login');
  } catch (err) {
    res.status(500).send('Error during registration');
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid credentials');
    }
    req.session.user = user;
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).send('Error during login');
  }
};
