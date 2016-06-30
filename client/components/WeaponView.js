import React from 'react';

class WeaponView extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="weaponViewBox">
        <div className="weaponInfo">
          <h5>{this.props.weapon.name}</h5>
          <p>{this.props.weapon.damage} dmg</p>
          <button data-id={this.props.weapon.id} onClick={this.props.deleteWeapon} type="button" className="btn btn-sm btn-danger">Delete</button>
        </div>
        <img className="weaponImage" src={this.props.weapon.image}></img>
      </div>
    );
  }

}

export default WeaponView;
