const { inquirerMenu, chooseOption } = require("./helpers/inquirer");
require("colors");

const main = async () => {
	let opt = 0;
	do {
		opt = await inquirerMenu();

		if (opt === 0) {
			const exit = await chooseOption("¿Seguro que quieres salir?");

			if (!exit) {
				opt = 1;
			}
		}
	} while (opt != 0);
};

main();
console.log("Bienvenido a la app".green);
