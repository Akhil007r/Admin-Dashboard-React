import React from "react";
import "../scss/loading.scss";

export  class Loading extends React.Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
}
export default Loading;