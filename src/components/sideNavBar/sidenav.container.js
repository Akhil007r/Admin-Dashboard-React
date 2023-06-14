import React, { Component } from "react";
import SideComp from "./sidenav.component";
export default class Sidebar extends Component {
  state = {
    selected: true,
  };
  handleChange = (e) => {
    const selected = e.target.name;
    if (selected === "selected") {
      this.setState((prevState) => ({
        selected: !prevState.selected,
      }));
    }
  };
  sideFunctions = {
    handleChange: this.handleChange.bind(this),
  };
  render() {
    return (
      <>
        <SideComp 
        {...this.state} 
        {...this.sideFunctions} />
      </>
    );
  }
}
