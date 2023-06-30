import React, { Component } from "react";
import CardComp from "./card.component";
import { getData } from "../../../utils/Crud";
export default class Card extends Component {
  state = {
    users: "",
    products:"",
  };
 
  componentDidMount() {
    let users = getData("users");
    users.then(res=>(
    this.setState({
      users: res.length,
    })));
    let products =getData("products");
    products.then(res=>(
    this.setState({
      products: res.length,
    })));
  }
  render() {
    return <CardComp {...this.state} />;
  }
}
