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


const deleteTaskMenu = async (tasks = []) => {
	if (tasks.length === 0) {
		console.log("No hay tareas para borrar".red);
		console.log();
		return;
	}

	// Creamos un array con todas las tareas para borrar y la última opción salir sin borrar nada
	let index = 0;
	let choices = listTasks(tasks, index);

	// Opción de salir sin borrar
	choices.push({
		value: 0,
		name: `${
			(choices.length + 1).toString().green + ".".green
		} Salir sin borrar tarea`,
	});

	const questions = [
		{
			type: "list",
			name: "option",
			message: "Seleccione la tarea que desea eliminar",
			choices,
		},
	];

	const { option } = await inquirer.prompt(questions);

	return option;
};

const completeTasksList = async (tasks = []) => {
	if (tasks.length === 0) {
		console.log("No hay tareas para mostrar".red);
		return;
	}

	// Creamos un array con todas las tareas
	let index = 0;
	let choices = listTasks(tasks, index);

	const questions = [
		{
			type: "checkbox",
			name: "options",
			message:
				"Marca la o las tareas que quieres completar, \ndesmarca la o las tareas que quieres pasar a pendientes",
			choices,
		},
	];

	const { options } = await inquirer.prompt(questions);

	return options;
};

const listTasks = (tasks = [], index) => {
	let choices = tasks.map((task) => {
		index++;

		return {
			value: task.id,
			name: `${index.toString().green + ".".green} ${task.description}`,
			checked: task.completedIn ? true : false,
		};
	});

	return choices;
};

module.exports = {
	inquirerMenu,
	chooseOption,
	readInput,
    showHeader,
	menuCities,
};
