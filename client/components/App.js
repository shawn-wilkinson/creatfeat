
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render(){

    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <ul className="nav navbar-nav">
            <li className="nav-item active"><Link className="nav-link" to="/">Fight</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/creatureCreate">New Creature</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/creatures">Creatures</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weaponCreate">New Weapon</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weapons">Weapons</Link></li>
          </ul>
        </nav>


        {this.props.children}
      </div>
    );

  }
}
