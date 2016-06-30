import React from 'react';
import FighterInit from './FighterInit';
import Fighter from './Fighter';

class Fight extends React.Component {

  constructor(props){
    super(props);
    this.state = { weapons: [], creatures: [] };
    // this.creatureCreate = this.creatureCreate.bind(this);
    // this.clearInputs = this.clearInputs.bind(this);

    // <Fighter key="I"
    //     creature={this.refs.init.refs.fighter1.state.creature}
    //     weapon={this.refs.init.refs.fighter1.state.weapon}/>
    // <Fighter key="II"
    //     creature={this.refs.init.refs.fighter2.state.creature}
    //     weapon={this.refs.init.refs.fighter2.state.weapon}/>
  }

  componentDidMount() {
    fetch('/creatures')
    .then(rcreat => rcreat.json())
    .then(jcreat => {
      fetch('/weapons')
        .then(rweap => rweap.json())
        .then(jweap => {
          this.setState({ weapons: jweap.weapons, creatures: jcreat.creatures });
        });
    });
  }

  startFight(event){
    event.preventDefault();
    
  }

  render() {
    return (
      <div>
        <div>

        </div>
        <FighterInit ref="init" weapons={this.state.weapons} creatures={this.state.creatures} />
         <button onClick={this.startFight}>Start Fight</button>
      </div>
    );
  }
}

export default Fight;
