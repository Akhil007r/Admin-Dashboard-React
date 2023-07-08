import React, { Component } from 'react'
import Login from "./Login";
import Home from "./home/home.container";
export default class EntryPoint extends Component {
    state = {
        username: "",
        password: "",
        auth: true,
        LogError:false,
        DetailErr:{
          login:false,
          pass:false,
        }
      };
      handleauth = (e) => {
        const { username, password } = this.state;
        if(username === ""){
          console.log("user")
          this.setState((prev)=>({
            DetailErr:{
              login:true,
              pass:prev.DetailErr.pass,
            }
          }))
          e.preventDefault();

        }
       else if(password===""){
        console.log("true")
          this.setState((prev)=>({
            DetailErr:{
              login:prev.DetailErr.login,
              pass:true,
            }
          }))
          e.preventDefault();

        }
      else{
        if(username !=="" && password !==""){
          this.setState( {
            DetailErr:{
            login:false,
            pass:false,
          }}
          )
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
              this.setState({
                auth: false, 
                LogError:true,
              });
              setTimeout(() => {
                this.setState({
                  LogError:false,
                });
              }, 2000);
              return false;
            })
          );
        }
          e.preventDefault();
      };
      }
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
          <>
            {this.state.auth ? (
              <Home {...this.handle} />
            ) : (
              <Login {...this.state} {...this.handle} />
            )}
          </>
        );
      }
}
