import App from './components/App';
import React from 'react';
import Home from './components/Home';
import CreatureCreate from './components/CreatureCreate';
import Creatures from './components/Creatures';
import WeaponCreate from './components/WeaponCreate';
import Weapons from './components/Weapons';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="creatureCreate" component={CreatureCreate} />
      <Route path="creatures" component={Creatures} />
      <Route path="weaponCreate" component={WeaponCreate} />
      <Route path="weapons" component={Weapons} />
    </Route>
  </Router>
  , document.getElementById('root'));
