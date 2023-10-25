import colors from "colors"
import readLine from "readline";

const showMenu = () => {
  return new Promise((resolve, _) => {
    console.clear();
    console.log("==============================".green);
    console.log("    Seleccione una opción".white);
    console.log("==============================".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opción: ", (answer) => {
      console.log({ answer });
      readLine.close();

      resolve(answer);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`\nPresione ${"ENTER".green} para continuar\n`, (_) => {
      rl.close();
      resolve();
    });
  });
};

// module.exports = { showMenu, pausa };
export { showMenu, pausa }
