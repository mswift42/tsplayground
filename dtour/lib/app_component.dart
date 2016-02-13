// Copyright (c) 2016, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular2/angular2.dart';

@Component(
    selector: 'my-app',
    templateUrl: 'app_component.html',
    styleUrls: const ['app_component.css'])
class AppComponent {
  var title = 'Tour of Heroes';
  var hero = new Hero(1, 'Windstorm');
  var heroes = HEROES;
}

class Hero {
  num id;
  String name;
  Hero(this.id, this.name);
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
