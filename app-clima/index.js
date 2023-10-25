const { inquirerMenu, chooseOption, readInput, showHeader } = require("./helpers/inquirer");
const Searchs = require("./models/searchs");
require("colors");

const main = async () => {
	const searchs = new Searchs();
	let opt = 0;
    console.clear();

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
                // option search city
                console.clear();
                showHeader();
                console.log('Opción de buscar ciudad');
                console.log('Pulse intro sin escribir nada para salir'.bgYellow);
                const city = await readInput('Ciudad: ')
                
				break;

			case 2:
				break;

			case 0:
				const exit = await chooseOption("¿Seguro que quieres salir?");

				if (!exit) {
					opt = 1;
				}
				break;
		}
	} while (opt != 0);
};

main();
console.log("Bienvenido a la app".green);
