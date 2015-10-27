import {Component} from 'angular2/angular2';
import {TaskService} from './Taskservice';
import {Task} from './Task';

@Component({
    selector: 'new-task',
    templateUrl: 'app/newtask.html'
})

export class NewTask {
    ts: TaskService;
    constructor(TaskService: TaskService){
        this.ts = TaskService;
    }
    saveTask(summary) {
        if (summary.value) {
            let task: Task = new Task(summary.value);
            this.ts.addTask(task);
            summary.value = '';
        }
    }

}
