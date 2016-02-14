// Copyright (c) 2016, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular2/core.dart';
import 'package:dtour/hero-detail_component.dart' show HeroDetailComponent;
import 'package:dtour/Hero.dart' show Hero;
import 'package:dtour/hero_service.dart';

@Component(
    selector: 'my-app',
    templateUrl: 'app_component.html',
    styleUrls: const ['app_component.css'],
    directives: const [HeroDetailComponent],
    providers: const [HeroService])
class AppComponent implements OnInit {
  var title = 'Tour of Heroes';
  List<Hero> heroes;
  Hero selectedHero;
  final HeroService _heroService;
  AppComponent(this._heroService);

  getHeroes() async {
    heroes = await _heroService.getHeroes();
  }

  void onSelect(Hero hero) {
    selectedHero = hero;
  }

  ngOnInit() {
    getHeroes();
  }
}
