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
}
