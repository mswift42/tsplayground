import {Component, NgFor} from 'angular2/angular2';
import {TaskService} from './Taskservice';
import {Task} from './Task';
import {ListTask} from './listtask';

@Component({
    selector: 'list-tasks',
    templateUrl: 'app/listtasks.html',
    directives: [NgFor, ListTask]
})

export class ListTasks {
    tasklist: Array<Task>;
    editing: boolean;
    constructor(TaskService: TaskService) {
        this.tasklist = TaskService.getTasks();
        this.editing = true;
    }
    toggleEdit() {
        this.editing = !this.editing;
    }
}
