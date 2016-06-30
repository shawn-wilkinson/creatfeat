import React from 'react';

class Picker extends React.Component {

  constructor(props){
    super(props);
    this.state = { creature: null, weapon: null};
    this.selectOptions = this.selectOptions.bind(this);
  }

  selectOptions(event){
    event.preventDefault();
    this.setState({ creature: this.refs.creatures.value, weapon: this.refs.weapons.value });
  }

  render() {
    return(
      <div>
        <select ref="creatures" key="1">
          {this.props.creatures.map(c => <option key={c._id} value={c}>{c.name}</option>)}
        </select>
        <select ref="weapons" key="2">
          {this.props.weapons.map(w => <option key={w._id} value={w}>{w.name}</option>)}
        </select>
        <button onClick={this.selectOptions}>Confirm</button>
      </div>
    );
  }

}

export default Picker;
