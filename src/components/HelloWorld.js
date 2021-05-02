import React, { Component } from "react";
import PiggyRender from "./PiggyRender";
import Radio from "./Radio";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Radio
          filterPiggy={this.props.filterHogs}
          sortData={this.props.sorting}
        />
        <div>
          {this.props.hogs.map((piggy) => (
            <PiggyRender piggy={piggy} />
          ))}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
