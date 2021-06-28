import React from "react";
import styles from './BaseLayout.module.css';
import { HeaderBlock } from "../components/header/HeaderBlock";
import { MainBlock } from "../components/main/MainBlock";
import { FooterBlock } from "../components/footer/FooterBlock";

export const BaseLayout = ({ children }) => {
  return (
    <div className={styles.main_wrapper}>
      <HeaderBlock/>
        { children }
      {/*<MainBlock/>*/}
      <FooterBlock/>
    </div>
  );
};
