import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
template: '<h1>{{title}}</h1><h2>{{hero.name}} detail</h2>'
})

export class AppComponent {
  public title: string = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 }
