const express = require("express");
const weatherController = require("../conrollers/weatherController");

const router = express.Router();

// Weather route
router.get("/weather/:city", weatherController.getWeather);

module.exports = router;