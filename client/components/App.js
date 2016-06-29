
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render(){

    return (
      <div>
        <h1>Creature Feature!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/creatureCreate">New Creature</Link></li>
          <li><Link to="/creatures">Creatures</Link></li>
          <li><Link to="/weaponCreate">New Weapon</Link></li>
          <li><Link to="/weapons">Weapons</Link></li>
        </ul>


        {this.props.children}
      </div>
    );

  }
}
