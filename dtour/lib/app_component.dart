import 'package:angular2/core.dart';
import 'package:dtour/heroes_component.dart';

@Component(
    selector: 'my-app',
    template: '''
<h1>{{title}}</h1>
<my-heroes></my-heroes>
''',
    directives: const [HeroesComponent])
class AppComponent {
  var title = 'Tour of Heroes';
}
