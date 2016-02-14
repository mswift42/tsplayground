import 'package:angular2/core.dart';
import 'package:dtour/Hero.dart' show Hero;
import 'package:dtour/hero_service.dart' show HeroService;
import 'package:angular2/router.dart';

@Component(selector: 'my-dashboard', templateUrl: 'dashboard_component.html')
class DashboardComponent implements OnInit {
  List<Hero> heroes = [];
  final HeroService _heroService;
  final Router _router;

  DashboardComponent(this._heroService, this._router);

  ngOnInit() {
    _heroService.getHeroes().then((i) => heroes = i.sublist(1, 5));
  }

  gotoDetail(Hero hero) {
    _router.navigate([
      'HeroDetail',
      {'id': hero.id.toString()}
    ]);
  }
}
