import React, { Component } from 'react'
import ToastComp from './toast.component'

export default class Toast extends Component {
    state={
        close:false,  
    }
    handleClose=()=>{
        this.setState({
            close:true
        })
    }
    handle={
        handleClose:this.handleClose.bind(this)
    }
  render() {
    return (
      <>
      <ToastComp 
      {...this.state}
      {...this.handle}
      />
      </>
    )
  }
}
