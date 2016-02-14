import 'package:angular2/core.dart';
import 'package:dtour/Hero.dart' show Hero;
import 'package:dtour/hero_service.dart' show HeroService;

@Component(selector: 'my-dashboard', templateUrl: 'dashboard_component.html')
class DashboardComponent implements OnInit {
  List<Hero> heroes = [];
  final HeroService _heroService;

  DashboardComponent(this._heroService);

  ngOnInit() {
    _heroService.getHeroes().then((i) => heroes = i.sublist(1, 5));
  }
}
