import {Component} from 'angular2/core';
import {TaskListComponent} from '../tasklist_component/tasklist.component';

@Component({
  selector:'task-app',
  templateUrl: 'app/components/app-component/app.component.html',
  directives: [TaskListComponent]
})

export class AppComponent {}
