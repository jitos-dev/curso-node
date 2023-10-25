import { inquirerMenu, chooseOption, readInput, deleteTaskMenu, completeTasksList } from "./helpers/inquirer.js";
import { Tasks } from "./models/tasks.js";
import { writeTasks, readTasks, readCompletePendingTasks, getTasks } from './helpers/writeReadTasksFile.js'

const main = async () => {
  let option = 0;

  const tasks = new Tasks();
  tasks._listTasks = getTasks() ? getTasks() : {}
  console.clear();

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        console.log('Crear nueva tarea:');
        console.log('Si quiere salir sin guardar pulse enter sin escribir nada'.yellow);
        const description = await readInput("Descripción de la tarea:");
        
        if (description !== '') {
          tasks.addTask(description);
          console.clear();
          console.log(`La tarea ${description.green} se ha añadido correctamente`);
        } else {
          console.clear();
        }

        break;
      case 2:
        console.clear()
        console.log('Listar todas las tareas:');
        readTasks(tasks.tasksToArr)
        break;
      case 3:
        console.clear()
        console.log('Listar tareas completadas:');
        readCompletePendingTasks(true, tasks.tasksToArr)
        break;
      case 4:
        console.clear()
        console.log('Listar tareas pendientes:');
        readCompletePendingTasks(false, tasks.tasksToArr)
        break;
      case 5:
        console.clear();
        console.log('Completar tareas');
        const ids = await completeTasksList(tasks.tasksToArr)
        tasks.completeTasks(ids)
        
        console.clear();
        console.log('Tareas modificadas correctamente'.bgCyan);
        break;
      case 6:
        console.clear();
        //Opción que elige el usuario
        const taskId = await deleteTaskMenu(tasks.tasksToArr)

        //La opción de salir sin borrar el el 0
        if (taskId !== 0) {
          const task = tasks.getTask(taskId)
          const ok = await chooseOption(`¿Seguro que quieres eliminar la tarea ${task.description}?`)

          if (ok){
            tasks.deleteTask(taskId)
          }
        }
        break;
      case 0:
        const exit = await chooseOption("¿Seguro que quieres salir?");

        if (!exit) {
          option = 1
          console.clear();
        };

        break;
    }
  } while (option !== 0);

  writeTasks(tasks._listTasks)
};

main();
