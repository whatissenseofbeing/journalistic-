require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB connection
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database connection error:', err));

// Session
app.use(session({
  secret: 'portfolio_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Routes
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Home Route
app.get('/', (req, res) => res.render('index'));

// Start Server
const PORT = process.env.PORT || 1113;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
