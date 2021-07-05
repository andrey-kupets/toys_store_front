import React from "react";
import styles from './PageNotFound.module.css';
import { useHistory } from "react-router-dom";

export const PageNotFound = () => {
  const history = useHistory();

  return (
    <div className={styles.page_not_found}>PAGE NOT FOUND
      <button onClick={() => history.push('/')}>
        НА ГЛАВНУЮ
      </button>
    </div>
  );
};
