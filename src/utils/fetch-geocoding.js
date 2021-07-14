require("dotenv").config();
const axios = require("axios");

const urlEndPointGeocodingAPI =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const API_GEO_KEY = process.env.API_GEO_KEY;

const fetchGeocoding = async (address, country = "US") => {
  const data = await axios(
    urlEndPointGeocodingAPI + encodeURIComponent(address) + ".json",
    {
      params: {
        access_token: API_GEO_KEY,
        country: country,
        // language: country,
      },
    }
  )
    .then((response) => response.data)
    .catch((err) => err);

  const {
    features: [{ place_name: place, center }],
  } = data;
  console.log("The coordonnates for", place, "are", center);
};

module.exports = fetchGeocoding;
