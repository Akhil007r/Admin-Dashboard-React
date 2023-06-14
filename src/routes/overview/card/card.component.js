import React, { Component } from "react";
import customer from "../../../components/images/rating.png";
import product from "../../../components/images/box.png";
import category from "../../../components/images/application.png";
import { NavLink } from "react-router-dom";

import "./cardStyles.scss";

export default class CardComp extends Component {
  render() {
    return (
      <div className="overViewContainer">
        <div className="overViewGreeting">
          <div>
            <h2>Hi, Akhil R</h2>
            <p>Welcome to Rhombus Admin Dashboard</p>
          </div>
        </div>

        <div className="overviewContent">
          {/* <div className="customer"> */}
          <NavLink to="/Customer" className="customer">
            <img src={customer} alt="customer" />
            <p>Customer</p>
            <div className="slidecontainer">
              <div style={{ width: "50%", height: "100%" }} className="slider">
                {" "}
              </div>
            </div>
          </NavLink>
          {/* </div> */}
          {/* <div className="customer"> */}
          <NavLink to="/Product" className="customer">
            <img src={product} alt="customer" />
            <p>Product</p>
            <div className="slidecontainer">
              <div style={{ width: "70%", height: "100%" }} className="slider">
                {" "}
              </div>
            </div>
          </NavLink>
          {/* </div> */}
          {/* <div className="customer"> */}
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
