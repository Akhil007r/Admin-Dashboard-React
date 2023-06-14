import React, { Component } from 'react'
import NavComp from './nav.component'

export default class Navbar extends Component {
 state={
  logout:false
 }
 handlepopup=()=>{
  this.setState(prev=>({
    logout:!prev.logout
  }))
 }
 handle={
  handlepopup:this.handlepopup.bind(this)
 }
  render() {
    const {handleLogout}=this.props
    return (
        <NavComp {...this.handle}{...this.state} handleLogout={handleLogout}  />
    )
  }
}
