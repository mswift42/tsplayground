import {Component} from 'angular2/angular2';

@Component({
  selector: 'list-task',
  templateUrl: 'app/listtask.html',
  properties: ['summary']
})

export class ListTask {
  summary: string;
}
