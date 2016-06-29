import React from 'react';
import WeaponView from './WeaponView';

class Weapons extends React.Component {

  constructor(props){
    super(props);
    this.state = { weapons: [] };
  }

  componentDidMount() {
    fetch('/weapons')
    .then(r => r.json())
    .then(j => {
      this.setState({ weapons: j.weapons });
    });
  }


  render() {
    return(
      <div>
        <h3>Weapon List!</h3>
        {this.state.weapons.map(w => <WeaponView key={w._id} weapon={w} />)}
      </div>

    )
  }


}

export default Weapons;
