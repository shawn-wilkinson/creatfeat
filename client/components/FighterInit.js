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
      <div className="row">
        <div className="col-md-6">
          <h5>Select Fighter I</h5>
          <Picker ref="fighter1" key="1" weapons={this.props.weapons} creatures={this.props.creatures} />
        </div>
        <div className="col-md-6">
          <h5>Select Fighter II</h5>
          <Picker ref="fighter2" key="2" weapons={this.props.weapons} creatures={this.props.creatures} />
        </div>
      </div>
    );
  }

}

export default FighterInit;
