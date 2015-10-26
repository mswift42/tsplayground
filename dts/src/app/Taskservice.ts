import {Task} from './Task';

export class TaskService {
    tasks: Task[];

    constructor() {
        this.tasks = [new Task("task1"), new Task("task2")];
    }
    getTasks() {
        return this.tasks;
    }
    addTask(task) {
      this.tasks.unshift(task);
    }
    removeTask(task) {
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }

}
