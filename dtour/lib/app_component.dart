import 'package:angular2/core.dart';
import 'package:angular2/router.dart';
import 'package:dtour/hero_service.dart' show HeroService;
import 'package:dtour/heroes_component.dart' show HeroesComponent;
import 'package:dtour/dashboard_component.dart' show DashboardComponent;

@Component(
    selector: 'my-app',
    template: '''
<h1>{{title}}</h1>
<nav>
<a [routerLink]="['Heroes']">Heroes</a>
<a [routerLink]="['Dashboard']">Dashboard</a>
</nav>
<router-outlet></router-outlet>
''',
    directives: const [ROUTER_DIRECTIVES],
    providers: const [ROUTER_PROVIDERS, HeroService])
@RouteConfig(const [
  const Route(path: '/heroes', name: 'Heroes', component: HeroesComponent),
  const Route(
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true)
])
class AppComponent {
  final String title = 'Tour of Heroes';
}
