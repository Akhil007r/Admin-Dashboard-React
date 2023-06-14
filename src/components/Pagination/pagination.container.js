import React from 'react'
import PaginationComponent from './pagination.component'

class Pagination extends React.Component {
  render() {
    const { totalPosts, currentPage, postPerPage,handleClick} = this.props;

    // pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumbers.push(i);

    }
    return (
      <>
      <PaginationComponent
          handleClick={handleClick}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
      />
      </>
    )
  }
}
export default Pagination