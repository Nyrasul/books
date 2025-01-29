const axios = require("axios");

exports.getWeather = async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.WEATHER_API_KEY; 
  if (!apiKey) {
    return res.status(500).json({ error: "API key is missing." });
  }

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const { location, current } = response.data;

    res.status(200).json({
      city: location.name,
      temperature: `${current.temp_c}°C`, 
      condition: current.condition.text, 
    });
  } catch (err) {
    console.error("Error fetching weather data:", err);
    res.status(500).json({ message: "Error fetching weather data" });
  }
};