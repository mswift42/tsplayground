import {Component} from 'angular2/core';

@Component({
  selector: 'single-task',
  templateUrl: 'app/components/task_component/task.component.html',
  inputs: ['summary', 'taskid', 'scheduled', 'taskcontents']
})

export class TaskComponent {
  summary: string;
  editsummary: boolean = false;
  taskid: string;
  scheduled: Date;
  taskcontents: string[];

  toggleSummaryEdit() {
    this.editsummary = !this.editsummary;
  }
}
