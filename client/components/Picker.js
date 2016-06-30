import React from 'react';

class Picker extends React.Component {
  constructor(props){
    super(props);
    // this.creatureCreate = this.creatureCreate.bind(this);
    // this.clearInputs = this.clearInputs.bind(this);

      // {this.props.weapons.map(w => <option key={w._id} value={w._id}>{w.name}</option>)}
  }

  render() {
    console.log(this.props.weapons);
    return(
      <div>
        <select key="1">
          {this.props.creatures.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
        <select key="2">
          {this.props.weapons.map(w => <option key={w._id} value={w._id}>{w.name}</option>)}
        </select>
      </div>
    );
  }

}

export default Picker;
