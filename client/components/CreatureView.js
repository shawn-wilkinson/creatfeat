import React from 'react';

class CreatureView extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="creatureViewBox">
        <div className="creatureInfo">
          <h5>{this.props.creature.name}</h5>
          <p>Wins: {this.props.creature.wins}</p>
          <p>Losses: {this.props.creature.wins}</p>
          <button data-id={this.props.creature._id} onClick={this.props.delete} type="button" className="btn btn-sm btn-danger">Delete</button>
        </div>
        <img className="creatureImage" src={this.props.creature.image}></img>
      </div>
    );
  }

}


export default CreatureView;
