import React, { Component } from "react";
import SideBar from "../sideNavBar";
import Navbar from "../navbar";
import Card from "../../routes/overview/card";
import Customer from "../../routes/customer";
import "./homeStyle.scss";
import Category from "../../routes/catogery/category.container";
import Product from "../../routes/products/products.container";
import{BrowserRouter , Routes, Route} from  "react-router-dom"
export default class Home extends Component {
  render() {
    const {handleLogout}=this.props
    return (
      <BrowserRouter>

      <div className="main">
        <div className="ViewcompSide">
          <SideBar />
        </div>
        <div className="viewComp">
          <div className="viewCompNav">
          <Navbar handleLogout={handleLogout}/>
          </div>
          <div className="viewContents">
            <Routes>
                  <Route path="/" element={<Card/>}/>
                  <Route path="/Customer" element={<Customer/>}/>
                  <Route path="/Product" element={<Product/>}/>
                  <Route path="/Category" element={<Category/>}/>

            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>

    );
  }
}
