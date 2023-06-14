import React, { Component } from "react";
import './toastStyles.scss'
export default class ToastComp extends Component {
  render() {
    const {handleClose,close}=this.props
    return (
      <div>
        <div className={close?"toast hidden":"toast Toastactive"}>
          <div className="toast-content">
            <i></i>

            <div className="message">
              <span className="text text-1">Success</span>
              <span className="text text-2">Your changes has been saved</span>
            </div>
          </div>
          <i className="close" onClick={handleClose}>X</i>

          <div className="progress Toastactive"></div>
        </div>
      </div>
    );
  }
}
