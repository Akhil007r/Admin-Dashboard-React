import React, { Component } from "react";
import searchIco from "../images/search.png";
import userImg from "../images/man.png";
import "./navStyle.scss";
export default class NavComp extends Component {
  render(props) {
    const{ handlepopup,handleLogout,logout} =this.props;
    return (
      <div className="nav">
        <div className="search">
          <h2>Rhombus</h2>
          <div className="searchContainer">
            <input type="text" className="navSearch" />
            <img src={searchIco} alt="search" aria-hidden="true" />
          </div>
        </div>
        <div className="navDetailContainer"  onClick={handlepopup}>
          <img src={userImg} alt="user" />
          <div>
            <h4>Akhil R</h4>
            <h6>ADMIN</h6>
          </div>
        </div>
        <div className={logout?"Logout":"Loghidden"}>
            <p onClick={handleLogout}>Logout</p>
          </div>
      </div>
    );
  }
}
