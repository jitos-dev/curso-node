class Weather {
	temperature = 0; // grados centigrados
	thermalSensation = 0; // grados centigrados
	tempMin = 0; // grados centigrados
	tempMax = 0; // grados centigrados
	humidity = 0; // %
	// Wind
	speed = 0; // meter/sec
	windGust = 0; // rafaga de viento. meter/sec
	weaderDescription = "";

	of(data) {
		this.temperature = data.temperature;
		this.thermalSensation = data.thermalSensation;
		this.tempMin = data.tempMin;
		this.tempMax = data.tempMax;
		this.humidity = data.humidity;
		this.speed = data.speed;
		this.windGust = data.windGust;
		this.weaderDescription = data.weaderDescription;

		return this;
	}

	showWeather() {
		console.log("\nInformación del tiempo:");
		console.log(
			"Temperatura: ".green,
			this.temperature || "sin valores",
			"ºC"
		);
		console.log(
			"Temperatura máxima: ".green,
			this.tempMax || "sin valores",
			"ºC"
		);
		console.log(
			"Temperatura mínima: ".green,
			this.tempMin || "sin valores",
			"ºC"
		);
		console.log(
			"Sensación térmica: ".green,
			this.thermalSensation || "sin valores",
			"ºC"
		);
		console.log("Humedad: ".green, this.humidity || "sin valores", "%");
		console.log(
			"Velocidad del viento: ".green,
			meterSecToKilometerHours(this.speed) || "sin valores",
			"Km/h"
		);
		console.log(
			"Ráfagas de viento: ".green,
			meterSecToKilometerHours(this.windGust) || "sin valores",
			"Km/h"
		);
		console.log(
			"Estado del día: ".green,
			this.weaderDescription.charAt(0).toUpperCase() +
				this.weaderDescription.slice(1) || "sin valores"
		);
	}
}

const meterSecToKilometerHours = (meterSec) => {
	return meterSec ? Math.round(3.6 * meterSec) : null;
};

module.exports = new Weather();
