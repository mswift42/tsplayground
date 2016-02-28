import {Component} from 'angular2/angular2';
import {TaskService} from './Taskservice';

@Component({
  selector: 'list-task',
  templateUrl: 'app/listtask.html',
  properties: ['summary']
})

export class ListTask {
  summary: string;
  editing: boolean;
  constructor(TaskService: TaskService) {
    this.editing = true;

  }
  toggleEdit() {
    this.editing = !this.editing;
  }

}
