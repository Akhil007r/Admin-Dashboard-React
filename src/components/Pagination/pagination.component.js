import React, { Component } from "react";

export default class PaginationComponent extends Component {
   
  render() {
    const {pageNumbers,currentPage,maxPageLimit,minPageLimit}=this.props;
    const length = currentPage === pageNumbers.length
    console.log(currentPage,pageNumbers.length,length)
    return (
      <>
        <div className="PaginationButtons">
        <button className="pgno" onClick={this.props.prevPage} disabled={currentPage === 1 ?true:false}>prev</button>

          {pageNumbers && pageNumbers.map((pagedata, index) => {
            if(pagedata < maxPageLimit + 1 && pagedata >minPageLimit){ 
              return (
              <button
                key={index}
                id={pagedata}
                onClick={this.props.handleClick}
                className={currentPage === pagedata ? "active" : "pgno"}
              >
                {pagedata}
              </button>
            );
          }
          else{
          return null 
          }
          })}
          <button className="pgno"  onClick={this.props.nextPage} disabled={length?true:false}>Next</button>


        </div>
        {pageNumbers.length!==0 &&<p>{this.props.currentPage} of {pageNumbers.length}</p> }
      </>
    );
  }
}
