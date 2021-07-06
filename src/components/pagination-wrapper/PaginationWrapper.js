import React from "react";
import styles from './PaginationWrapper.module.css';

export const PaginationWrapper = ({ children, currentPage, totalPages, onPrevClick, onNextClick }) => {
  return (
    <div className={styles.pagination_wrapper}>
      <div>
        <button>first page</button>
        <button onClick={onPrevClick}>prev page</button>
        <span>{currentPage} of {totalPages}</span>
        <button onClick={onNextClick}>next page</button>
        <button>last page</button>
      </div>
      {children}
    </div>
  );
};
