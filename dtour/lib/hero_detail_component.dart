import 'package:angular2/core.dart';
import 'package:dtour/Hero.dart' show Hero;
import 'package:angular2/router.dart' show RouteParams;
import 'package:dtour/hero_service.dart' show HeroService;
import 'dart:html';

@Component(
    selector: 'my-hero-detail', templateUrl: 'hero_detail_component.html')
class HeroDetailComponent implements OnInit {
  Hero hero;
  final HeroService _heroService;
  final RouteParams _router;
  HeroDetailComponent(this._heroService, this._router);
  ngOnInit() {
    num id = int.parse(_router.get('id'));
    _heroService.getHero(id).then((i) => hero = i);
  }

  goBack() {
    window.history.back();
  }

  gotoDetail(hero) {}
}
