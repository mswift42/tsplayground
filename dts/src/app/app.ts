import {Component, bootstrap} from 'angular2/angular2';
import {NewTask} from './newtask';
import {TaskService} from './Taskservice';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2><new-task></new-task>',
    directives: [NewTask]
})

class AppComponent {
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}

bootstrap(AppComponent, [TaskService])
