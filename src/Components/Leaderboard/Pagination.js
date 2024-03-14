// Pagination.js

import React from 'react';
import '../../assests/styles/pagination.scss'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPageNumbers = () => {
    // Show a fixed number of pages before and after the current page
    const numPagesToShow = 3; // Adjust this value based on your design
    const start = Math.max(1, currentPage - numPagesToShow);
    const end = Math.min(start + 2 * numPagesToShow, totalPages);

    return pageNumbers.slice(start - 1, end).map((number) => (
      <li
        key={number}
        className={number === currentPage ? 'active' : ''}
        onClick={() => onPageChange(number)}
      >
        {number}
      </li>
    ));
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={() => onPageChange(currentPage - 1)}>&laquo; Prev</li>
        {renderPageNumbers()}
        <li onClick={() => onPageChange(currentPage + 1)}>Next &raquo;</li>
      </ul>
    </div>
  );
};

export default Pagination;
