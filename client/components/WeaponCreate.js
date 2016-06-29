import React from 'react';

class WeaponCreate extends React.Component {

  constructor(props) {
    super(props);
    this.weaponCreate = this.weaponCreate.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  weaponCreate() {
    const name = this.refs.weaponname.value;
    const damage = this.refs.damage.value;
    const image = this.refs.pictureurl.value;
    const body = JSON.stringify({ name, damage, image });
    console.log('Weapon Input: ', body);
    fetch('/weapons', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(j => {
      console.log(j.w);
    })
    .then(() => this.clearInputs());
  }

  clearInputs() {
    this.refs.weaponname.value = '';
    this.refs.pictureurl.value = '';
    this.refs.damage.value = '';
  }

  render() {
    return (
      <div>
        <h3>Create A New Weapon</h3>
        <label>Name</label>
        <input ref="weaponname" type="text" />
        <label>Damage</label>
        <input ref="damage" type="text" />
        <label>Picture</label>
        <input ref="pictureurl" type="text" />
        <button onClick={this.weaponCreate}>Create</button>
      </div>
    )
  }


}

export default WeaponCreate;
