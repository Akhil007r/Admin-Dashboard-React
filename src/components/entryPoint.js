import React, { Component } from 'react'
import Login from "./Login";
import Home from "./home/home.container";
export default class EntryPoint extends Component {
    state = {
        username: "",
        password: "",
        auth: false,
      };
      handleauth = () => {
        const { username, password } = this.state;
        fetch("http://localhost:4001/profile")
          .then((res) => res.json())
          .then((res) =>
            res.find((item) => {
              if (item.name === username) {
                if (item.password === password) {
                  this.setState({
                    auth: true,
                  });
                  return true;
                }
              }
              alert("Enter Correct Credentials");
              this.setState({
                auth: false,
              });
              return false;
            })
          );
      };
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      };
      handleLogout = () => {
        this.setState({
          auth: false,
        });
      };
      handle = {
        handleauth: this.handleauth.bind(this),
        handleChange: this.handleChange.bind(this),
        handleLogout: this.handleLogout.bind(this),
      };
      render() {
        return (
          <div>
            {this.state.auth ? (
              <Home {...this.handle} />
            ) : (
              <Login {...this.state} {...this.handle} />
            )}
          </div>
        );
      }
}
