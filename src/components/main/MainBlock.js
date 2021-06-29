import React from "react";
import styles from './Main.module.css';
import { LeftSideBar } from "./left-sidebar";
import { ProductsList } from "./products-list";

export const MainBlock = ({ children }) => {

  return (
    <div className={styles.main_block}>
      {/*div for checking overflow scrolling*/}
      {/*<div style={{height: 1600, background: 'blue'}}>yy</div>*/}
      {/*<LeftSideBar className={styles.left_sideBar}/>*/}
      {/*<ProductsList className={styles.products_container}/>*/}
      { children }
    </div>
  );
};
