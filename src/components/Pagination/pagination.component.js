import React, { Component } from "react";

export default class PaginationComponent extends Component {
   
  render() {
    const {handleClick, pageNumbers,currentPage}=this.props;
    return (
      <>
        <div className="PaginationButtons">
          {pageNumbers.map((pagedata, index) => {
            return (
              <button
                key={index}
                id={pagedata}
                onClick={handleClick}
                className={currentPage === pagedata ? "active" : "pgno"}
              >
                {pagedata}
              </button>
            );
          })}
        </div>
      </>
    );
  }
}
