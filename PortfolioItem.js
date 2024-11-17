const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String], // Array of image URLs
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
