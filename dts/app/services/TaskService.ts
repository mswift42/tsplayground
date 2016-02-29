import {Task} from './Task';

export class TaskService {
  tasklist: Task[] = [
    new Task("summary1",1),
    new Task("summary2",2),
    new Task("summary3",3)
  ];
  getTasks(): Task[] {
    return this.tasklist;
  }
}
