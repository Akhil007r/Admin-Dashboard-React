import React, { Component } from "react";
import { nextPage,prevPage,handleClick } from "../../store/Pagination/paginationAction";
import PaginationComponent from "./pagination.component";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    currentPage: state.page.currentPage,
    postPerPage: state.page.postPerPage,
    data: state.page.data,
    paginationLimit: state.page.paginationLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    nextPage:()=>dispatch(nextPage()),
    prevPage:()=>dispatch(prevPage()),
    handleClick:(e)=>{dispatch(handleClick(e))}
  }
};

class Pagination extends Component {
  render() {
    const {
      totalPosts,
      postPerPage,
      maxPageLimit,
      minPageLimit,
    } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <>
        <PaginationComponent
        {...this.props}
          pageNumbers={pageNumbers}
          maxPageLimit={maxPageLimit}
          minPageLimit={minPageLimit}
        />
      </>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Pagination);
