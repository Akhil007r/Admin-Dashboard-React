import React, { Component } from "react";
import "./login.scss";
export default class LoginComp extends Component {
  render() {
    const { handleChange,handleauth,LogError,DetailErr } = this.props;
    return (
      <div className="LoginContainer">
      { LogError && <div className="LogError">
         <p className="LogErrorMsg">Wrong Credentials</p>
        </div>}
        <div className="login">
          <div className="head">
            <h1 className="company">Rhombus</h1>
          </div>
          <p className="msg">Admin</p>
          <form onSubmit={handleauth}>
          <div className="form">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                className="text"
                onChange={handleChange}
                autoComplete="off"
              />
              {DetailErr.login && <span style={{color:"red"}}>Please Enter User Name</span>}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="password"
                onChange={handleChange}
                autoComplete="off"
              />
              {DetailErr.pass && <span style={{color:"red"}}>Please Enter Password</span>}
              <br />
              <button href="/" className="btn-login" type="submit">
                Login
              </button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
