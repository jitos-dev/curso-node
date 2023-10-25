import { Task } from "./task.js";

class Tasks {
  _listTasks = {};

  constructor() {
    this._listTasks = {};
  }

  get tasksToArr() {
    let tasksArr = []

    Object.keys(this._listTasks).forEach(key => {
      tasksArr.push(this._listTasks[key])
    })

    return tasksArr;
  }

  get tasks() {
    return this._listTasks;
  }

  addTask(description = "") {
    const task = new Task(description);

    this._listTasks[task.id] = task;
  }

  getTask(id = "") {
    return this._listTasks[id];
  }

  deleteTask( id = '') {
    const task = this._listTasks[id];

    if (task) {
      delete this._listTasks[id]
      console.log(`Tarea ${task.description} borrada con éxito`.green);
      console.log();
      return
    }

    console.log(`No se encontro la tarea con id ${id}`.red);
    console.log();
  }

  /**
   * Marca como completadas las tareas que tengan como clave el string del array
   * que se pasa por parametro y como no completadas las que esten en el array
   * @param {*} tasks Array de string con las claves de las tareas
   */
  completeTasks(tasks = []) {
    Object.keys(this._listTasks).forEach(id => {
      this._listTasks[id].completedIn = (tasks.includes(id)) ?
        new Date().getTime() :
        null
    });
  }
}

export { Tasks };
