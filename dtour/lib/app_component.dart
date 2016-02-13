// Copyright (c) 2016, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:angular2/angular2.dart';

@Component(selector: 'my-app', templateUrl: 'app_component.html')
class AppComponent {
  var title = 'Tour of Heroes';
  var hero = new Hero(1, 'Windstorm');
}

class Hero {
  num id;
  String name;
  Hero(this.id, this.name);
}