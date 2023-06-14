import React, { Component } from "react";
import { data } from "./sidedata";
import hamburgerIcon from "../images/hamburger.png"
import "./sideStyle.scss";
import { NavLink } from "react-router-dom";
export default class SideComp extends Component {
  render() {
    const { handleChange,selected } = this.props;
    return (
      <div className={selected?"hidden":"side"}>
        <section >
          <div className="logo">
            <img src={hamburgerIcon} alt="hamburger" name="selected" onClick={handleChange}/>
            {/* <h3>Rhombus</h3> */}
          </div>
          <ul >
            {data.map((item,index) => {
              return (
                <NavLink to={item.path} key={index} >
                <div
                  className="items"
                  name={item.name}
                 
                  onClick={handleChange}
                > 
                
                  <li name={item.name} aria-hidden="true" >
                    <img
                      className="icon"
                      src={item.icon}
                      alt={item.name}
                      aria-hidden="true"
                    />
                  </li>
                  <li name={item.name}>
                    {item.name}
                  </li>
                </div>
                </NavLink>

              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
