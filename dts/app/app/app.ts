import {Component, bootstrap} from 'angular2/angular2';
import {NewTask} from './newtask';
import {TaskService} from './Taskservice';
import {ListTasks} from './listtasks';

@Component({
    selector: 'my-app',
    template: '<new-task></new-task><list-tasks></list-tasks>',
    directives: [NewTask,ListTasks]
})

class AppComponent {
}

bootstrap(AppComponent, [TaskService])
