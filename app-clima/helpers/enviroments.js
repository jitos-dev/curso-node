const dotenv = require("dotenv").config();

const setBoolean = (value, defaultValue = false) => {
	return ["true", "false"].includes(value) ? JSON.parse(value) : defaultValue;
};

const env = {
	reqresUrl: process.env.REQRES_URL,
};

module.exports = env;