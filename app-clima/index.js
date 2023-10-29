const {
	inquirerMenu,
	chooseOption,
	readInput,
	showHeader,
	menuCities,
} = require("./helpers/inquirer");
const { readFile, writeFile } = require('./helpers/writeReadFile')
const Searchs = require("./models/searchs");
const Weather = require('./models/weather')
const search = require("./models/search");
const requestService = require("./services/request.service");
const { cities } = require("./services/search.service");
require("colors");

const main = async () => {
	const searchs = new Searchs();
	const history = readFile()
	searchs.history = history;

	let opt = 0;
	console.clear();

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				// option search city
				console.clear();
				showHeader();
				console.log("Opción de buscar ciudad");
				console.log(
					"Pulse intro sin escribir nada para salir".bgYellow
				);

				// Option chosen by user
				const nameCity = await readInput("Ciudad: ");

				if (nameCity === '') continue;

				// we get the city data and the response code
				const { data, status } = await requestService.getLocation(
					nameCity
				);

				//todo opción de que si no quiere ninguna pueda salir sin elegir ciudad
				//if an error has occurred
				if (status === 500) {
					console.log(
						"Ha ocurrido un error al obtener los datos de localización de la ciudad"
					);
					continue;
				} else if (status === 404 || data.length === 0) {
					console.log(
						"No se han encontrado resultados con los datos introducidos"
					);
					continue;
				}

				//we get the id of the selected city and the city
				const id = await menuCities(data);
				const city = data.find((city) => city.place_id === id);

				// show the result
				search.showSearch(city);

				// Get weather data and show results
				const result = await requestService.getWeather(city)
				
				const weather = Weather.of(result);
				weather.showWeather();
				console.log();

				// save the search in the history
				searchs.setHistory = city;
				break;

			case 2:
				console.log();
				searchs.getHistory.forEach(city => {
					console.log('Ciudad: '.green, city.display_name);
				})
				console.log();
				break;

			case 0:
				const exit = await chooseOption("¿Seguro que quieres salir?");

				if (!exit) {
					opt = 1;
				} else {
					writeFile(searchs.getHistory)
				}

				break;
		}

		//TODO guardar la busqueda en la base de datos si ha buscado algo

		//TODO limpiar el array de searchs
	} while (opt != 0);
};

main();
console.log("Bienvenido a la app".green);
