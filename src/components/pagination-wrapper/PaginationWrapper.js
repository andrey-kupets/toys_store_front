import React from "react";
import styles from './PaginationWrapper.module.css';
import { useLocation } from "react-router-dom";

export const PaginationWrapper = ({ children, currentPage, totalPages, onPrevClick, onNextClick, onFirstClick, onLastClick }) => {
  const searchParams = useLocation().search.replace('?', '');



  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.button_wrapper}>
        <button disabled={currentPage === 1} onClick={onFirstClick}>Первая</button>
        <button disabled={currentPage - 1 === 0} onClick={onPrevClick}>Предыдущая</button>
        <span>Страница <b>{currentPage}</b> из <b>{totalPages}</b></span>
        <button disabled={currentPage + 1 > totalPages} onClick={onNextClick}>Следующая</button>
        <button disabled={currentPage === totalPages} onClick={onLastClick}>Последняя</button>
      </div>
      {children}
    </div>
  );
};
