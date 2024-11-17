const axios = require('axios');

exports.getCurrencyData = async (req, res) => {
  try {
    const { data } = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_API_KEY}/latest/USD`);
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching currency data');
  }
};

exports.getNewsData = async (req, res) => {
  try {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
    res.json(data.articles);
  } catch (err) {
    res.status(500).send('Error fetching news data');
  }
};

exports.getWeatherData = async (req, res) => {
  try {
    const city = req.query.city || 'Astana';
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching weather data');
  }
};
