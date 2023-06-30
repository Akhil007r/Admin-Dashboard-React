import React, { Component } from "react";
import customer from "../../../components/images/rating.png";
import product from "../../../components/images/box.png";
import category from "../../../components/images/application.png";
import { NavLink } from "react-router-dom";

import "./cardStyles.scss";

export default class CardComp extends Component {
  render() {
  const {products,users}=this.props;

    return (
      <div className="overViewContainer">
        <div className="overViewGreeting">
          <div>
            <h2>Hi, Akhil R</h2>
            <p>Welcome to Rhombus Admin Dashboard</p>
          </div>
        </div>

        <div className="overviewContent">
          <NavLink to="/Customer" className="customer">
            <img src={customer} alt="customer" />
            <p>Customer </p>
            <label style={{fontSize:"8pt"}}>No. Of Users {users}</label>
            <div className="slidecontainer">
              <div style={{ width: `${users +"%"}`, height: "100%" }} className="slider">
                {" "}
              </div>
            </div>
          </NavLink>
          <NavLink to="/Product" className="customer">
            <img src={product} alt="customer" />
            <p>Product</p>
            <label style={{fontSize:"8pt"}}>No. Of Products {products}</label>

            <div className="slidecontainer">
              <div style={{ width:  `${products +'%'}`, height: "100%" }} className="slider">
                {" "}
              </div>
            </div>
          </NavLink>
          <NavLink to="/Category" className="customer">
            <img src={category} alt="customer" />
            <p>Category</p>
          </NavLink>
        </div>
      </div>
      // </div>
    );
  }
}
