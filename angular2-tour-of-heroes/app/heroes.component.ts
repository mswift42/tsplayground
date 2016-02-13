import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero' ;
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';



@Component({
    selector: 'my-heroes',
templateUrl: 'app/heroes.component.html',
styleUrls: ['app/heroes.component.css'],
directives: [HeroDetailComponent]

})

export class HeroesComponent {
  heroes: Hero[];
  public title = 'Tour of Heroes';
  selectedHero: Hero;
  constructor(private _heroService: HeroService, private _router: Router) {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  gotoDetail() {
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
 }
