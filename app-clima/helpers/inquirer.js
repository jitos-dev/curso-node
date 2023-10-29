// const inquirer = require('inquirer');
const inquirer = require("inquirer");
require("colors");

const questions = [
	{
		type: "list",
		name: "opt",
		message: "¿Que desea hacer?",
		choices: [
			{ value: 1, name: `${"1.".green} Buscar ciudad` },
			{ value: 2, name: `${"2.".green} Historial` },
			{ value: 0, name: `${"0.".green} Salir\n` },
		],
	},
];

const showHeader = () => {
	console.log("==============================".green);
	console.log("    Seleccione una opción".white);
	console.log("==============================".green);
}

const inquirerMenu = async () => {
	showHeader();
	const { opt } = await inquirer.prompt(questions);

	return opt;
};

const chooseOption = async (message) => {
	const inputQuestion = [
		{
			type: "confirm",
			name: "option",
			message,
		},
	];

	const { option } = await inquirer.prompt(inputQuestion);

	return option;
};

const readInput = async (message) => {
	const input = [
		{
			type: "input",
			name: "option",
			message,
			// Si queremos validar lo que ha introducido el usuario lo hacemos así
			// validate(value) {
			//   if (value.length === 0) {
			//     return "Por favor ingrese el valor solicitado";
			//   }

			//   return true;
			// },
		},
	];

	const { option } = await inquirer.prompt(input);

	return option;
};

const menuCities = async (cities = []) => {
	const choices = cities.map((city, index) => {
		return {
			value: city.place_id,
			name: `${(index + 1).toString().green}: ${city.display_name}`
		}
	})

	choices.unshift({
		value: 0,
		name: '0: '.green + 'Salir sin seleccionar ciudad'
	})

	const input = [
		{
			type: 'list',
			name: 'city',
			message: 'Escoja una opción',
			choices
		}
	]

	const {city} = await inquirer.prompt(input);

	return city;
}

module.exports = {
	inquirerMenu,
	chooseOption,
	readInput,
    showHeader,
	menuCities,
};
