import React from "react";
import styles from './BaseLayout.module.css';
import { FooterBlock, HeaderBlock } from "../components";

export const BaseLayout = ({ children }) => {
  return (
    <div className={styles.main_wrapper}>
      <HeaderBlock/>
        { children }
      <FooterBlock/>
    </div>
  );
};
