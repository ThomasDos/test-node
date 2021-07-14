require("dotenv").config();
const axios = require("axios");

const urlEndPointWeatherAPI = "http://api.weatherstack.com/current";
const API_WEATHER_KEY = process.env.API_WEATHER_KEY;

const fetchDataWeather = async (city) => {
  const myData = await axios(urlEndPointWeatherAPI, {
    params: {
      access_key: API_WEATHER_KEY,
      query: city,
    },
  })
    .then((response) => response.data)
    .catch((err) => err);

  const {
    location: { name: ville },
    current: { observation_time: heure, feelslike: temperature },
  } = myData;

  return `Dans la ville de ${ville} à ${heure}, la température ressentie est de ${temperature}`;
};

module.exports = fetchDataWeather;
