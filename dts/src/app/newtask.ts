import {Component} from 'angular2/angular2';

@Component({
    selector: 'new-task',
    templateUrl: 'app/newtask.html'
})

export class NewTask {
    doneTyping(summary) {
        if (summary != '') {
            console.log(summary);

        }
    }

}
