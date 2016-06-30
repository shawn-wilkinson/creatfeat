import React from 'react';
import Picker from './Picker';

class FighterInit extends React.Component {

  constructor(props){
    super(props);
    // this.creatureCreate = this.creatureCreate.bind(this);
    // this.clearInputs = this.clearInputs.bind(this);

    // <Picker weapons={this.props.weapons} creatures={this.props.creatures} />

    // <Picker key="2" weapons={this.props.weapons} creatures={this.props.creatures} />

  }


  render() {
    return(
      <div>
        <h5>Select Fighter I</h5>
          <Picker key="1" weapons={this.props.weapons} creatures={this.props.creatures} />
        <h5>Select Fighter II</h5>
          <Picker key="2" weapons={this.props.weapons} creatures={this.props.creatures} />
      </div>
    );
  }

}

export default FighterInit;
