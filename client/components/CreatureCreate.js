import React from 'react';

class CreatureCreate extends React.Component {

  constructor(props){
    super(props);
    this.creatureCreate = this.creatureCreate.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  creatureCreate(){
    const name = this.refs.creaturename.value;
    const image = this.refs.pictureurl.value;
    const body = JSON.stringify({ name, image });
    console.log('Creature Input: ', body);
    fetch('/creatures', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(j => {
      console.log(j.c);
    })
    .then(() => this.clearInputs());
  }

  clearInputs() {
    this.refs.creaturename.value = '';
    this.refs.pictureurl.value = '';
  }

  render() {
    return(
      <div>
        <h3>Create A New Creature</h3>
        <label>Name</label>
        <input ref="creaturename" type="text" />
        <label>Picture</label>
        <input ref="pictureurl" type="text" />
        <button onClick={this.creatureCreate}>Create</button>

      </div>

    )
  }


}

export default CreatureCreate;
