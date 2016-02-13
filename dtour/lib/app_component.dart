// Copyright (c) 2016, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular2/angular2.dart';
import 'package:dtour/hero-detail_component.dart' show HeroDetailComponent;
import 'package:dtour/Hero.dart' show Hero;

@Component(
    selector: 'my-app',
    templateUrl: 'app_component.html',
    styleUrls: const ['app_component.css'],
    directives: const [HeroDetailComponent]
)

class AppComponent {
  var title = 'Tour of Heroes';
  var heroes = HEROES;
  Hero selectedHero;

  void onSelect(Hero hero) {
    selectedHero = hero;
  }
}


List<Hero> HEROES = [
  new Hero(11, "Mr. Nice"),
  new Hero(12, "Narco"),
  new Hero(13, "Bombasto"),
  new Hero(14, "Celeritas"),
  new Hero(15, "Magneta"),
  new Hero(16, "RubberMan"),
  new Hero(17, "Dynama"),
  new Hero(18, "Dr IQ"),
  new Hero(19, "Magma"),
  new Hero(20, "Tornado")
];
