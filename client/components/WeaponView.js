import React from 'react';

class WeaponView extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.weapon.name}</h3>
        <p>{this.props.weapon.damage}</p>
        <img src={this.props.weapon.image}></img>
      </div>

    )
  }

}

export default WeaponView;
