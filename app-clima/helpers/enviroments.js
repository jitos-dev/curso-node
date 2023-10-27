require("dotenv").config();

const setBoolean = (value, defaultValue = false) => {
	return ["true", "false"].includes(value) ? JSON.parse(value) : defaultValue;
};

const env = {
	reqresUrl: process.env.REQRES_URL,
	locationIqToken: process.env.LOCATION_IQ_TOKEN,
	locationIqUrl: process.env.LOCATION_IQ_URL,
	locationIqLimit: process.env.LOCATION_IQ_LIMIT,
	locationIqLanguage: process.env.LOCATION_IQ_LANGUAGE,
	openWeatherKey: process.env.OPENWEATHER_KEY,
	openWeatherUrl: process.env.OPENWEATHER_URL,
	openWeatherLanguage: process.env.OPENWEATHER_LANGUAGE,
};

module.exports = env;