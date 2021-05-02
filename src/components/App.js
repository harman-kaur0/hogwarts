import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "all",
      hogs: hogs,
    };
  }

  filterHogs = (type) => {
    switch (type) {
      case "greased":
        this.setState({
          hogs: hogs.filter((piggy) => piggy.greased === true),
        });
        break;
      case "non-greased":
        this.setState({
          hogs: hogs.filter((piggy) => piggy.greased === false),
        });
        break;
      default:
        this.setState({
          hogs: hogs,
        });
    }
  };

  sorting = (e) => {
    const sortData = this.state.hogs.sort((a, b) =>
      a[e.target.value] > b[e.target.value] ? 1 : -1
    );
    this.setState({
      hogs: sortData,
    });
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld
          hogs={this.state.hogs}
          sorting={this.sorting}
          filterHogs={this.filterHogs}
        />
      </div>
    );
  }
}

export default App;
