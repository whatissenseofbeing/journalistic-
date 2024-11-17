const express = require('express');
const { getCurrencyData, getNewsData, getWeatherData } = require('../controllers/apiController');
const router = express.Router();

router.get('/currency', getCurrencyData);
router.get('/news', getNewsData);
router.get('/weather', getWeatherData);

module.exports = router;
