import {Component} from 'angular2/core';
import {TaskService} from '../../services/TaskService';

@Component({
  selector: 'single-task',
  templateUrl: 'app/components/task_component/task.component.html',
  inputs: ['summary', 'taskid', 'scheduled', 'taskcontents'],
  providers: [TaskService]
})

export class TaskComponent {
  summary: string;
  editingsummary: boolean = false;
  taskid: string;
  scheduled: Date;
  taskcontents: string[];

  constructor(private _taskService: TaskService) {}

  toggleSummaryEdit() {
    this.editingsummary = !this.editingsummary;
  }
  editSummary(event) {
  this._taskService.editSummary(event.target.value, this.taskid);
  this.toggleSummaryEdit();
  }

}
