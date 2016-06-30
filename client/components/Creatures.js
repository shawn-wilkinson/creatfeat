import React from 'react';
import CreatureView from './CreatureView';

class Creatures extends React.Component {

  constructor(props){
    super(props);
    this.state = { creatures: [] };
    this.delete = this.delete.bind(this);
    // {this.state.creatures.map(c => <CreatureView key={c._id} creature={c} />)}
  }

  componentDidMount() {
    fetch('/creatures')
    .then(r => r.json())
    .then(j => {
      this.setState({ creatures: j.creatures });
    });
  }

  delete(event){
    const creatureId = event.currentTarget.getAttribute('data-id');
    console.log('CREATURE DELETE!!!');
    console.log(creatureId);
    fetch(`/creatures/${creatureId}/delete`, { method: 'delete', headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      console.log('RESPONSE:', r.creatures);
      this.setState({ creatures: r.creatures });
    });
  }


  render() {
    return(
      <div>
        <h3>Creature List!</h3>
        {this.state.creatures.map(c => <CreatureView key={c._id} creature={c} delete={this.delete} />)}
      </div>

    )
  }


}

export default Creatures;
