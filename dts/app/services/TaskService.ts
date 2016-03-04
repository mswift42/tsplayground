import {Task} from './Task';
import {Injectable} from 'angular2/core';

@Injectable()
export class TaskService {
  tasklist: Task[] = [
    new Task("summary1",1),
    new Task("summary2",2),
    new Task("summary3",3)
  ];
  getTasks(): Task[] {
    return this.tasklist;
  }
  addTask(summary: string) {
    this.tasklist.unshift(new Task(summary, 123));
  }
  deleteTask(id: number) {
    this.tasklist = this.tasklist.filter((i) => i.id !== id);
  }
  getTask(taskid: string):Task {
    return this.tasklist.filter((i) => parseInt(taskid) === i.id)[0];
  }
  editSummary(id: number, summary: string) {

  }
}
