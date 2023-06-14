import React, { Component } from "react";
import "./login.scss";
export default class LoginComp extends Component {
  render() {
    const { handleChange,handleauth } = this.props;
    return (
      <div className="LoginContainer">
        <div className="login">
          <div className="head">
            <h1 className="company">Rhombus</h1>
          </div>
          <p className="msg">Admin</p>
          <div className="form">
              <input
                type="email"
                name="username"
                placeholder="Email"
                className="text"
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="password"
                onChange={handleChange}
              />
              <br />
              <button href="/" className="btn-login" onClick={handleauth}>
                Login
              </button>
          </div>
        </div>
      </div>
    );
  }
}
