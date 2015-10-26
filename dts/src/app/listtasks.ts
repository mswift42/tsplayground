import {Component, NgFor} from 'angular2/angular2';
import {TaskService} from './Taskservice';
import {Task} from './Task';

@Component({
  selector: 'list-tasks',
  templateUrl: 'app/listtasks.html',
  directives: [NgFor]
})

export class ListTasks {
  ts: TaskService;
  tasklist: Array<Task>;
  constructor(TaskService: TaskService) {
    this.ts = TaskService;
    this.tasklist = this.ts.getTasks();
  }
}
