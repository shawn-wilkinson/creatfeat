import React from 'react';
import FighterInit from './FighterInit';

class Fight extends React.Component {

  constructor(props){
    super(props);
    this.state = { weapons: [], creatures: [] };
    // this.creatureCreate = this.creatureCreate.bind(this);
    // this.clearInputs = this.clearInputs.bind(this);
  }

  componentDidMount() {
    fetch('/creatures')
    .then(rcreat => rcreat.json())
    .then(jcreat => {
      fetch('/weapons')
        .then(rweap => rweap.json())
        .then(jweap => {
          console.log("IN THE FETCH!", jweap);
          this.setState({ weapons: jweap.weapons, creatures: jcreat.creatures });
        });
    });
  }

  render() {
    console.log("WEAPONS IN FIGHT", this.state.weapons);
    return (
      <div>
        <FighterInit weapons={this.state.weapons} creatures={this.state.creatures} />
      </div>
    );
  }
}

export default Fight;
