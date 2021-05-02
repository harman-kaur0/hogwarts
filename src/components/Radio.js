import React, { Component } from "react";

export default class Radio extends Component {
  submitHandler = (e) => {
    this.props.filterPiggy(e.target.value);
  };
  myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  render() {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };

    return (
      <div>
        <form onChange={(e) => this.submitHandler(e)} className="centerForm">
          <input type="radio" name="pig" value="all" defaultChecked /> all
          <input type="radio" name="pig" value="greased" /> greased
          <input type="radio" name="pig" value="non-greased" />
          non-greased
        </form>

        <div className="dropdown">
          <button onClick={this.myFunction} className="dropbtn">
            Sort
          </button>
          <div id="myDropdown" className="dropdown-content">
            <option onClick={(e) => this.props.sortData(e)} value="name">
              Name
            </option>
            <option onClick={(e) => this.props.sortData(e)} value="weight">
              Weight
            </option>
          </div>
        </div>
      </div>
    );
  }
}
