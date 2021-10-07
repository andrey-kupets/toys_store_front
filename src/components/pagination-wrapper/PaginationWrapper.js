import React from "react";
import styles from './PaginationWrapper.module.css';
import { transformQuery } from "../../funtion-helpers";
import { useHistory } from "react-router-dom";

export const PaginationWrapper = ({ children, page, pages, searchParams }) => {
  const history = useHistory();

  const onClickHandler = (newPage) => {
    history.push(`/products?${transformQuery(searchParams, { page: newPage })}`);
  };

  return (
    <div className={styles.pagination_wrapper}>
      {!!page && !!pages && pages > 1 &&
      (<div className={styles.button_wrapper}>
        <button disabled={page <= 1} onClick={() => onClickHandler(1)}>Первая</button>
        <button disabled={page <= 1} onClick={() => onClickHandler(page - 1)}>Предыдущая</button>
        <span>Страница <b>{page}</b> из <b>{pages}</b></span>
        <button disabled={page >= pages} onClick={() => onClickHandler(page + 1)}>Следующая</button>
        <button disabled={page >= pages} onClick={() => onClickHandler(pages)}>Последняя</button>
      </div>)}
      {children}
    </div>
  );
};
