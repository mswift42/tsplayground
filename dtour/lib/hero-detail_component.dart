import 'package:angular2/angular2.dart' show Component;
import 'package:dtour/Hero.dart' show Hero;

@Component(
    selector: 'hero-detail',
    template: '''
 <div *ngIf="hero != null">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>''',
    inputs: const ['hero'])
class HeroDetailComponent {
  Hero hero;
}
