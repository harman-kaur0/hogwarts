import React, { Component } from "react";

export default class PiggyRender extends Component {
  constructor() {
    super();
    this.state = {
      specialty: null,
      medal: null,
      weight: null,
    };
  }

  displayState = () => {
    this.state.medal === null
      ? this.setState({
          specialty: this.props.piggy.specialty,
          medal: this.props.piggy["highest medal achieved"],
          weight: this.props.piggy.weight,
        })
      : this.setState({
          specialty: null,
          medal: null,
          weight: null,
        });
  };

  render() {
    let imgName = this.props.piggy.name.replaceAll(" ", "_").toLowerCase();
    return (
      <div onClick={this.displayState} className="pigTile">
        <h3>
          {this.props.piggy.name + "   "}
          <button onClick={(e) => e.target.parentNode.parentNode.remove()}>
            Hide Away
          </button>
        </h3>

        <img src={require(`../hog-imgs/${imgName}.jpg`)} alt="pigImg" />
        <p>{this.state.specialty}</p>
        <p>{this.state.medal}</p>
        <p>{this.state.weight}</p>
      </div>
    );
  }
}
