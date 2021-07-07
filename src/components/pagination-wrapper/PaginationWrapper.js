import React from "react";
import styles from './PaginationWrapper.module.css';

export const PaginationWrapper = ({ children, currentPage, totalPages, onPrevClick, onNextClick, firstPageValue, lastPageValue }) => {
  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.button_wrapper}>
        <button disabled={currentPage === 1} onClick={firstPageValue}>Первая</button>
        <button disabled={currentPage - 1 === 0} onClick={onPrevClick}>Предыдущая</button>
        <span>Страница <b>{currentPage}</b> из <b>{totalPages}</b></span>
        <button disabled={currentPage + 1 > totalPages} onClick={onNextClick}>Следующая</button>
        <button disabled={currentPage === totalPages} onClick={lastPageValue}>Последняя</button>
      </div>
      {children}
    </div>
  );
};
