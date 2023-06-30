import React, { Component } from "react";
import LoginComp from "./login.component";

export default class Login extends Component { render() {
    return (
      <>
        <LoginComp {...this.props}/>
      </>
    );
  }
}
