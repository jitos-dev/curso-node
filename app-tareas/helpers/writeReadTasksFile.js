import * as fs from "fs";
import { constants } from './constants.js'

const writeTasks = (data) => {
  const dataToJson = JSON.stringify(data);
  
  fs.writeFileSync(constants.pathFile, dataToJson);
};

const getTasks = () => {
  if (!fs.existsSync(constants.pathFile)) {
    return null;
  }

  const info = fs.readFileSync(constants.pathFile, { encoding: "utf-8" });
  return JSON.parse(info);
};

const readTasks = (tasks) => {
  tasks.forEach((task, index) => {
    const date = task.completedIn ? 
      new Date(task.completedIn).toLocaleDateString('es', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}) :
      null;

    console.log(`${(index + 1).toString().green + '.'.green} ${task.description}:: ${
      task.completedIn ? 
      'Completada: '.green + ' ' + date :
      'Pendiente'.red
    }`);
  })
  console.log();
}

const readCompletePendingTasks = (complete = true, arrTasks) => {
  if (arrTasks.length === 0) {
    console.log('No hay tareas para mostrar'.red);
    console.log();
    return;
  };

  let index = 1;
  let tasks = [];
  
  arrTasks.forEach((task) => {
    if (complete && task.completedIn !== null) {
      const date = new Date(task.completedIn).toLocaleDateString('es', {weekday : 'long', year: 'numeric', month: 'long', day: 'numeric'});

      tasks.push(`${index.toString().green + '.'.green} ${task.description}: ${'Completada: '.green} ${date.white}`);
      index ++;
    } else if (!complete && task.completedIn === null) {
      tasks.push(`${index.toString().green + '.'.green} ${task.description}: ${'Pendiente'.red}`);
      index++;
    }
  })

  if (tasks.length === 0) {
    console.log('No hay tareas para mostrar'.red);
    console.log();
    return;
  }

  tasks.forEach(task => console.log(task));
  console.log();
}

export { writeTasks, getTasks, readCompletePendingTasks, readTasks };
