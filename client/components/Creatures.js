import React from 'react';
import CreatureView from './CreatureView';

class Creatures extends React.Component {

  constructor(props){
    super(props);
    this.state = { creatures: [] };
    // {this.state.creatures.map(c => <CreatureView key={c._id} creature={c} />)}
  }

  componentDidMount() {
    fetch('/creatures')
    .then(r => r.json())
    .then(j => {
      this.setState({ creatures: j.creatures });
    });
  }


  render() {
    return(
      <div>
        <h3>Creature List!</h3>
        {this.state.creatures.map(c => <CreatureView key={c._id} creature={c} />)}
      </div>

    )
  }


}

export default Creatures;
