import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}
var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Component({
    selector: 'my-app',
template: `
<h1>{{title}}</h1>
<h2>My Heroes</h2>
<ul class="heroes">
<li *ngFor="#hero of heroes">
 <h2>{{hero.name}} details!</h2>
 <div><label>id: </label>{{hero.id}}</div>
 <div><input [(ngModel)]="hero.name" placeholder="name"></div>
 </li>
    </ul>
`
})

export class AppComponent {
    public heroes = HEROES;
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 }
