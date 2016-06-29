import React from 'react';

class CreatureView extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.creature.name}</h3>
        <p>{this.props.creature.health}</p>
        <img src={this.props.creature.image}></img>
      </div>

    )
  }

}

export default CreatureView;
