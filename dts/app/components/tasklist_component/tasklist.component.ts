import {Component} from 'angular2/core';
import {TaskService} from '../../services/TaskService';
import {Task} from '../../services/Task';
import {TaskComponent} from '../task_component/task.component';

@Component({
  selector: 'task-list',
  templateUrl: 'app/components/tasklist_component/tasklist.component.html',
  directives: [TaskComponent]
})

export class TaskListComponent {}
