import 'package:dtour/Hero.dart' show Hero;
import 'package:dtour/mock_heroes.dart' show HEROES;
import 'package:angular2/core.dart';
import 'dart:async';

@Injectable()
class HeroService {
  Future<List<Hero>> getHeroes() {
    return new Future(() => HEROES);
  }

  Future<Hero> getHero(id) async {
    List<Hero> heroes = await getHeroes();
    return heroes.firstWhere((i) => i.id == id);
  }
}
